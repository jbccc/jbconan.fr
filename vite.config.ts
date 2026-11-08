import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { defineConfig, type Plugin } from "vite";
import { renderBlog } from "./scripts/blog.mjs";

function blog(): Plugin {
  let isBuild = false;
  let outDir = "dist";

  return {
    name: "blog",
    configResolved(config) {
      isBuild = config.command === "build";
      outDir = config.build.outDir;
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = (req.url ?? "").split("?")[0]!.replace(/\/$/, "");
        if (url !== "/blog" && !url.startsWith("/blog/")) return next();
        const html = renderBlog("/src/style.css").get(`${url.slice(1)}/index.html`);
        if (!html) return next();
        res.setHeader("Content-Type", "text/html");
        res.end(await server.transformIndexHtml(url, html));
      });
    },
    closeBundle() {
      if (!isBuild) return;
      // Blog pages share the stylesheet the home page was built with.
      const home = readFileSync(join(outDir, "index.html"), "utf8");
      const cssHref = home.match(/href="(\/assets\/[^"]+\.css)"/)?.[1];
      if (!cssHref) throw new Error("Could not find the built stylesheet");
      for (const [path, html] of renderBlog(cssHref)) {
        const target = join(outDir, path);
        mkdirSync(dirname(target), { recursive: true });
        writeFileSync(target, html);
      }
    },
  };
}

export default defineConfig({
  plugins: [blog()],
});
