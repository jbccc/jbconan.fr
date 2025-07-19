import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Project } from '../types';
import { markdownContent } from '../data/markdown';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const markdown = markdownContent[project.id];

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/70 backdrop-blur-lg z-[9999] flex items-center justify-center p-4 animate-modalFadeIn" onClick={handleOverlayClick}>
      <div className="relative bg-background-light dark:bg-background-dark rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] max-w-[90vw] max-h-[90vh] w-full flex flex-col animate-modalSlideIn border border-border-light dark:border-border-dark">
        <button 
          className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white border-none rounded-full w-10 h-10 cursor-pointer flex items-center justify-center z-[10000] transition-all duration-200 shadow-lg hover:scale-110 hover:shadow-xl active:scale-95"
          onClick={onClose}
          aria-label="Close project details"
        >
          <span className="text-2xl font-bold leading-none">×</span>
        </button>
        
        <div className="overflow-y-auto p-10 pb-12 flex flex-col gap-8 max-h-[calc(90vh-4rem)] scrollbar-thin scrollbar-thumb-accent-light scrollbar-track-transparent hover:scrollbar-thumb-accent-light">

          {/* Markdown Content */}
          {project.dedicatedPage && (
            <div className="flex-1 min-h-0">
              {!markdown ? (
                <div className="text-center py-12 px-4">
                  <h3 className="text-red-500 mb-4">Error Loading Project Details</h3>
                  <p>Project content not found.</p>
                </div>
              ) : (
                <div className="leading-7 prose prose-lg max-w-none dark:prose-invert prose-headings:text-primary-light dark:prose-headings:text-primary-dark prose-p:text-secondary-light dark:prose-p:text-secondary-dark prose-a:text-accent-light dark:prose-a:text-accent-dark prose-a:no-underline hover:prose-a:border-b hover:prose-a:border-accent-light dark:hover:prose-a:border-accent-dark prose-strong:text-primary-light dark:prose-strong:text-primary-dark prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:text-gray-800 dark:prose-code:text-gray-200 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:border prose-pre:border-border-light dark:prose-pre:border-border-dark prose-blockquote:border-l-4 prose-blockquote:border-accent-light dark:prose-blockquote:border-accent-dark prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-800/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-6 prose-blockquote:italic">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ children }) => <h1 className="text-primary-light dark:text-primary-dark text-4xl font-bold my-8 mb-4 border-b-4 border-accent-light dark:border-accent-dark pb-2">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-primary-light dark:text-primary-dark text-3xl font-semibold my-7 mb-4 opacity-90">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-primary-light dark:text-primary-dark text-2xl font-semibold my-6 mb-3 opacity-80">{children}</h3>,
                      h4: ({ children }) => <h4 className="text-primary-light dark:text-primary-dark text-xl font-semibold my-5 mb-2.5 opacity-75">{children}</h4>,
                      p: ({ children }) => <p className="text-secondary-light dark:text-secondary-dark text-base mb-4 text-justify">{children}</p>,
                      ul: ({ children }) => <ul className="text-secondary-light dark:text-secondary-dark my-4 pl-6">{children}</ul>,
                      ol: ({ children }) => <ol className="text-secondary-light dark:text-secondary-dark my-4 pl-6">{children}</ol>,
                      li: ({ children }) => <li className="mb-2">{children}</li>,
                      code: ({ children, className }) => {
                        const isInline = !className;
                        return isInline ? 
                          <code className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-1 py-0.5 rounded font-mono text-sm">{children}</code> :
                          <code className={className}>{children}</code>;
                      },
                      pre: ({ children }) => <pre className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg overflow-x-auto font-mono text-sm leading-6 my-4 border border-border-light dark:border-border-dark">{children}</pre>,
                      a: ({ href, children }) => (
                        <a 
                          href={href} 
                          target={href?.startsWith('http') ? '_blank' : undefined}
                          rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-accent-light dark:text-accent-dark no-underline border-b border-transparent transition-all duration-200 hover:border-accent-light dark:hover:border-accent-dark"
                        >
                          {children}
                        </a>
                      ),
                      blockquote: ({ children }) => <blockquote className="border-l-4 border-accent-light dark:border-accent-dark my-6 py-4 px-6 bg-gray-50 dark:bg-gray-800/50 italic text-secondary-light dark:text-secondary-dark">{children}</blockquote>,
                    }}
                  >
                    {markdown}
                  </ReactMarkdown>
                  <br/>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 