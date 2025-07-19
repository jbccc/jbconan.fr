import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-container">
      <Navigation />
      <div className="hidden md:flex fixed top-4 right-4 z-50 bg-accent-light dark:bg-accent-dark text-white px-4 py-2 rounded-full shadow-lg items-center gap-2 animate-pulse">
        <span>🏆</span>
        <span>100% vibe-coded</span>
      </div>
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}; 