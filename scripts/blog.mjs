// Turns posts/*.md into blog pages. Used by the dev server and by the build.
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { marked } from "marked";

const POSTS_DIR = "posts";

const escapeHtml = (text) =>
  text.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

const formatDate = (date) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", { dateStyle: "long", timeZone: "UTC" });

function readPost(filename) {
  const source = readFileSync(join(POSTS_DIR, filename), "utf8");
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error(`${filename}: missing the --- header at the top`);

  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    fields[line.slice(0, separator).trim()] = line
      .slice(separator + 1)
      .trim()
      .replace(/^(["'])(.*)\1$/, "$2");
  }

  if (!fields.title) throw new Error(`${filename}: needs a title`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fields.date ?? "")) {
    throw new Error(`${filename}: needs a date written like 2026-11-08`);
  }

  return {
    slug: filename.replace(/\.md$/, ""),
    title: fields.title,
    date: fields.date,
    description: fields.description ?? "",
    html: marked.parse(match[2]),
  };
}

/** Files starting with "_" are drafts and never published. */
function readPosts() {
  if (!existsSync(POSTS_DIR)) return [];
  return readdirSync(POSTS_DIR)
    .filter((name) => name.endsWith(".md") && !name.startsWith("_"))
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date));
}

function page({ title, description, body, cssHref }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="stylesheet" href="${cssHref}" />
  </head>
  <body class="blog">
    <main>
${body}
    </main>
  </body>
</html>
`;
}

/** Returns a map of output path to page HTML. */
export function renderBlog(cssHref) {
  const posts = readPosts();
  const pages = new Map();

  const list = posts.length
    ? `<ul class="post-list">${posts
        .map(
          (post) => `
        <li>
          <a href="/blog/${post.slug}/">${escapeHtml(post.title)}</a>
          <p class="post-date">${formatDate(post.date)}</p>
          ${post.description ? `<p>${escapeHtml(post.description)}</p>` : ""}
        </li>`,
        )
        .join("")}
      </ul>`
    : `<p class="blog-empty">Nothing here yet.</p>`;

  pages.set(
    "blog/index.html",
    page({
      title: "Blog | Jean-Baptiste Conan",
      description: "Writing by Jean-Baptiste Conan.",
      cssHref,
      body: `      <p class="blog-nav"><a href="/">Jean-Baptiste Conan</a></p>
      <h1>Blog</h1>
      ${list}`,
    }),
  );

  for (const post of posts) {
    pages.set(
      `blog/${post.slug}/index.html`,
      page({
        title: `${post.title} | Jean-Baptiste Conan`,
        description: post.description,
        cssHref,
        body: `      <p class="blog-nav"><a href="/blog/">Blog</a></p>
      <article>
        <h1>${escapeHtml(post.title)}</h1>
        <p class="post-date">${formatDate(post.date)}</p>
        ${post.html}
      </article>`,
      }),
    );
  }

  return pages;
}
