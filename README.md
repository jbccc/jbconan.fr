# Portfolio Website Template

A modern, responsive portfolio website template built with React, TypeScript, and Tailwind CSS. Perfect for developers, researchers, and professionals looking to showcase their work.

## Features

- 🎨 **Modern Design** - Clean, professional interface with dark/light mode
- 📱 **Fully Responsive** - Works beautifully on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal loading speeds
- 🎯 **Interactive Filtering** - Dynamic project and skill filtering
- 📄 **Project Details** - Dedicated pages with markdown support
- 🏷️ **Skill Categories** - Organized skill showcase with color coding
- 📚 **Education Section** - Academic background display
- 🔗 **Social Links** - Contact and social media integration

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit `http://localhost:5173`

## Customization Guide

### 1. Personal Information

**Update `src/pages/Home.tsx`:**
- Replace "Your Name" with your actual name
- Update the phonetic pronunciation
- Replace lorem ipsum with your personal introduction

### 2. Skills Data

**Edit `src/data/skills.ts`:**
- Modify skill categories and individual skills
- Customize colors for each skill category
- Add or remove skill sets as needed

```typescript
export const skillsData: SkillsData = {
  skills: {
    "Your Skill Category": {
      skills: ["Skill 1", "Skill 2", "Skill 3"],
      color: "blue" // Choose your color
    }
  }
};
```

### 3. Education Data

**Edit `src/data/education.ts`:**
- Replace example universities with your actual education
- Update degrees, GPAs, and descriptions
- Add or remove education entries

### 4. Projects Data

**Edit `src/data/projects.ts`:**
- Replace template projects with your actual work
- Update project types, descriptions, and tech stacks
- Add links to your repositories and live demos
- Customize project categories and tags

### 5. Project Detail Pages

**Create markdown files in `src/assets/`:**
- Replace `ml-research.md` and `startup-journey.md` with your content
- Create new markdown files for projects with `dedicatedPage` property
- Update `src/data/markdown.ts` to reference your new files

### 6. Theme and Styling

**Customize colors in `tailwind.config.js`:**
- Update the color palette to match your brand
- Modify spacing, fonts, and other design tokens

### 7. Contact Information & Footer

**Update `src/components/Footer.tsx`:**
- Replace `your-linkedin-username` with your LinkedIn profile
- Replace `your-twitter-handle` with your Twitter/X handle  
- Replace `your-github-username` with your GitHub username
- Replace `your.email@example.com` with your email address
- Update `Your Website` with your site name
- Replace the GitHub repository link with your own

**Update contact sections:**
- Update the contact button functionality in `src/pages/Home.tsx`

## Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts (theme, etc.)
├── data/              # Data files (skills, projects, education)
├── pages/             # Main page components
├── types/             # TypeScript type definitions
├── assets/            # Markdown files and static assets
└── main.tsx           # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

### 8. Clean Up Template Files

**Remove template content:**
- Replace template markdown files in `src/assets/` with your own content
- Add your own favicon in `public/favicon.ico`
- Add your CV/resume file to `public/static/` if needed
- Update any placeholder images with your own

## Customization Tips

1. **Colors**: Use a consistent color palette throughout your design
2. **Images**: Add your profile picture and project screenshots
3. **Content**: Write compelling descriptions that highlight your achievements
4. **SEO**: Update the title, meta descriptions, and add structured data
5. **Analytics**: Add Google Analytics or similar tracking
6. **Performance**: Optimize images and consider lazy loading
7. **Personal Files**: Remove any template files and add your own CV, images, etc.

## Support

If you have questions or need help customizing the template:
1. Check the documentation above
2. Review the code comments
3. Create an issue in the repository

## License

This template is open source and available under the MIT License.

---

**Made with ❤️ using React and TypeScript**

*Don't forget to ⭐ star the repository if you found it helpful!*
