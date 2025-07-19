import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { projectsData } from '../data/projects';
import { markdownContent } from '../data/markdown';
import { ProjectCard } from './ProjectCard';
import './ProjectPage.css';

export const ProjectPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [showProjectCard, setShowProjectCard] = useState<boolean>(false);

  const project = projectsData.projects.find(p => p.id === projectId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowProjectCard(false);
      }
    };

    if (showProjectCard) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [showProjectCard]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  if (!project.dedicatedPage) {
    return <Navigate to="/projects" replace />;
  }

  const markdown = markdownContent[project.id];

  if (!markdown) {
    return (
      <div className="project-page">
        <div className="error">
          <h2>Error Loading Project</h2>
          <p>Project content not found.</p>
          <a href="/projects">← Back to Projects</a>
        </div>
      </div>
    );
  }

  const handleCloseModal = () => {
    setShowProjectCard(false);
  };

  const handleShowProjectCard = () => {
    setShowProjectCard(true);
  };

  return (
    <div className="project-page">
      <div className="project-header-actions">
        <button 
          className="project-card-trigger"
          onClick={handleShowProjectCard}
          aria-label="Show project summary card"
        >
          📋 Project Summary
        </button>
      </div>

      <div className="project-content">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => <h1 className="project-title">{children}</h1>,
            h2: ({ children }) => <h2 className="project-subtitle">{children}</h2>,
            h3: ({ children }) => <h3 className="project-section">{children}</h3>,
            p: ({ children }) => <p className="project-paragraph">{children}</p>,
            ul: ({ children }) => <ul className="project-list">{children}</ul>,
            li: ({ children }) => <li className="project-list-item">{children}</li>,
            code: ({ children, className }) => {
              const isInline = !className;
              return isInline ? 
                <code className="inline-code">{children}</code> :
                <code className={className}>{children}</code>;
            },
            pre: ({ children }) => <pre className="code-block">{children}</pre>,
            a: ({ href, children }) => (
              <a 
                href={href} 
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="project-link"
              >
                {children}
              </a>
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>

      <div className="project-navigation">
        <a href="/projects" className="back-link">← Back to Projects</a>
      </div>

      {/* Project Card Modal */}
      {showProjectCard && (
        <div className="project-modal-overlay" onClick={handleCloseModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="project-modal-close"
              onClick={handleCloseModal}
              aria-label="Close project summary"
            >
              ×
            </button>
            <ProjectCard 
              project={project} 
              showDetailedBadge={false}
              onClick={undefined}
            />
          </div>
        </div>
      )}
    </div>
  );
}; 