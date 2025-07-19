import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [showBrandOnly, setShowBrandOnly] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Determine scroll direction
      const scrollingUp = scrollY < lastScrollY;
      setLastScrollY(scrollY);
      
      // Show brand only when scrolling down past threshold and not scrolling up
      if (scrollY > 50 && !scrollingUp) {
        setShowBrandOnly(true);
      } else if (scrollY <= 50 || scrollingUp) {
        setShowBrandOnly(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`flex justify-between items-center py-4 mb-8 border-b border-border-light dark:border-border-dark transition-all duration-300 ease-in-out sticky top-0 bg-background-light dark:bg-background-dark z-[1000] backdrop-blur-[10px] ${
      showBrandOnly ? 'border-b-0 mb-0 py-2' : ''
    }`}>
      <Link 
        to="/" 
        className={`text-xl font-bold no-underline text-primary-light dark:text-primary-dark transition-all duration-300 ease-in-out ${
          showBrandOnly ? 'opacity-40 text-base' : ''
        }`}
      >
        jbconan.fr
      </Link>
      
      <div className={`flex gap-6 items-center transition-all duration-300 ease-in-out ${
        showBrandOnly ? 'opacity-0 invisible translate-x-5' : ''
      }`}>
        <Link 
          to="/" 
          className={`no-underline text-primary-light dark:text-primary-dark font-medium transition-colors duration-200 relative hover:text-accent-light dark:hover:text-accent-dark ${
            location.pathname === '/' ? 'text-accent-light dark:text-accent-dark after:content-[""] after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:bg-accent-light dark:after:bg-accent-dark after:rounded-sm' : ''
          }`}
        >
          Home
        </Link>
        <Link 
          to="/projects" 
          className={`no-underline text-primary-light dark:text-primary-dark font-medium transition-colors duration-200 relative hover:text-accent-light dark:hover:text-accent-dark ${
            location.pathname === '/projects' ? 'text-accent-light dark:text-accent-dark after:content-[""] after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:bg-accent-light dark:after:bg-accent-dark after:rounded-sm' : ''
          }`}
        >
          Projects
        </Link>
        
        <a 
          href="/static/conan_jb_cv.pdf" 
          target="_blank" 
          rel="noopener"
          className="no-underline text-primary-light dark:text-primary-dark font-medium transition-colors duration-200 relative hover:text-accent-light dark:hover:text-accent-dark px-3 py-2 rounded hover:bg-dropdown-hover-light dark:hover:bg-dropdown-hover-dark"
        >
          My CV
        </a>
        
        <button 
          className="bg-transparent border-2 border-border-light dark:border-border-dark text-primary-light dark:text-primary-dark font-inherit text-base cursor-pointer p-2 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 ease-in-out relative overflow-hidden hover:border-accent-light dark:hover:border-accent-dark hover:scale-110 focus:outline-2 focus:outline-accent-light dark:focus:outline-accent-dark focus:outline-offset-2"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="text-lg transition-transform duration-300 ease-in-out hover:rotate-[20deg]">
            {theme === 'dark' ? '☀️' : '🌙'}
          </span>
        </button>
      </div>
    </nav>
  );
}; 