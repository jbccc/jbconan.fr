# JB Conan's Personal Website

A modern, responsive personal website built with React, TypeScript, and Vite. This website showcases my projects, skills, and experience in mathematics, machine learning, and software engineering.

## Features

- 🌗 **Dark/Light Theme Toggle** - Seamless theme switching with system preference detection
- 📱 **Fully Responsive Design** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🔍 **Interactive Filtering** - Filter projects by type and domain
- 🔎 **Skills Search** - Search through technical skills and expertise
- ♿ **Accessible** - Built with accessibility best practices
- 🎯 **TypeScript** - Full type safety throughout the application

## Project Structure

```
src/
├── assets/             # Static content and markdown files
├── components/         # Reusable React components
│   ├── Navigation.tsx  # Main navigation with dropdown and theme toggle
│   ├── Footer.tsx      # Footer with social links
│   ├── ProjectCard.tsx # Project display component
│   ├── ProjectModal.tsx # Project detail modal component
│   ├── ProjectPage.tsx # Individual project page component
│   └── Layout.tsx      # Main layout wrapper
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── data/               # Static data and content management
│   ├── projects.ts     # Project information and metadata
│   ├── skills.ts       # Technical and professional skills data
│   └── markdown.ts     # Markdown content loader and exporter
├── pages/              # Route-based page components
│   ├── Home.tsx        # Homepage with intro, projects, and skills
│   └── Projects.tsx    # Dedicated projects showcase page
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared interfaces and types
└── styles/             # CSS modules and global styles
```

## Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **React Router** - Client-side routing for SPA navigation
- **Vite** - Next-generation frontend build tool
- **CSS3** - Modern CSS with custom properties and animations
- **Context API** - State management for theme switching

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000/`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## Deployment

This website can be deployed to any static hosting service such as:

- **Vercel** - Recommended for React applications
- **Netlify** - Great for static sites with form handling
- **GitHub Pages** - Free hosting for public repositories
- **AWS S3 + CloudFront** - Enterprise-grade hosting

## Features in Detail

### Theme System
- Automatic detection of system dark/light preference
- Manual theme toggle with persistence
- Smooth transitions between themes
- CSS custom properties for consistent theming

### Project Filtering
- Filter by project type
- Filter by domain tags
- Real-time filtering with smooth animations

### Responsive Design
- Mobile-first approach
- Fluid typography and spacing
- Optimized layouts for all screen sizes
- Touch-friendly interactive elements

### Performance Optimizations
- Lazy loading of images
- Optimized bundle sizes
- Efficient re-rendering with React optimizations
- Fast development server with HMR

## Contact

**Jean-Baptiste Conan**
- Website: [jbconan.fr](https://jbconan.fr)
- Email: contact@jbconan.fr
- LinkedIn: [jean-baptiste-conan](https://linkedin.com/in/jean-baptiste-conan)
- GitHub: [jbccc](https://github.com/jbccc)
- X/Twitter: [@FrenchyJayb](https://x.com/FrenchyJayb)

---

Built with ❤️ and lots of ☕ by Jean-Baptiste Conan
