import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 p-0 border-none bg-gradient-to-br from-accent-light to-[#5a7fd8] text-white rounded-xl shadow-accent dark:shadow-accent-dark relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(74,144,226,0.4)] transition-all duration-300 ease-in-out">
      <div className="p-8 relative z-10">
        <div className="mb-6">
          <div className="mb-4 text-center">
            <span className="text-base text-white font-medium inline-block py-2 px-4 bg-white/20 rounded-2xl border border-white/30 backdrop-blur-[5px] transition-all duration-300 ease-in-out hover:bg-white/30 hover:-translate-y-0.5">
              ✨ Contact me anywhere, anytime
            </span>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="https://linkedin.com/in/jean-baptiste-conan" 
              target="_blank" 
              rel="noopener"
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/20 border border-white/30 text-white transition-all duration-300 ease-in-out no-underline backdrop-blur-[5px] hover:bg-white/30 hover:border-white/50 hover:-translate-y-0.5" 
              title="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a 
              href="https://x.com/FrenchyJayb" 
              target="_blank" 
              rel="noopener" 
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/20 border border-white/30 text-white transition-all duration-300 ease-in-out no-underline backdrop-blur-[5px] hover:bg-white/30 hover:border-white/50 hover:-translate-y-0.5"
              title="X (Twitter)"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a 
              href="https://github.com/jbccc" 
              target="_blank" 
              rel="noopener" 
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/20 border border-white/30 text-white transition-all duration-300 ease-in-out no-underline backdrop-blur-[5px] hover:bg-white/30 hover:border-white/50 hover:-translate-y-0.5"
              title="GitHub"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a 
              href="mailto:contact@jbconan.fr" 
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/20 border border-white/30 text-white transition-all duration-300 ease-in-out no-underline backdrop-blur-[5px] hover:bg-white/30 hover:border-white/50 hover:-translate-y-0.5" 
              title="Email"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center text-sm text-white">
          <p>
            <span>&copy;</span> 2025 <strong>jbconan.fr</strong> <span>•</span> Built with passion and lots of coffee ☕
          </p>
          <p className="mt-1 opacity-75">
            This template is custom and available under{' '}
            <a
              href="https://github.com/jbccc/jbconan.fr" 
              target="_blank" 
              rel="noopener"
              className="text-blue-900 hover:text-blue-800 hover:underline font-medium"
            >
              MIT license
            </a>{' '}
            on GitHub
          </p>
        </div>
      </div>
    </footer>
  );
}; 