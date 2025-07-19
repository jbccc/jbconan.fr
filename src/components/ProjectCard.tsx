import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../types';

// Add import for ReactMarkdown
import ReactMarkdown from 'react-markdown';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  showDetailedBadge?: boolean;
}

const LocationIcon: React.FC = () => (
  <svg className="w-3 h-3 fill-secondary-light dark:fill-secondary-dark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const ArrowIcon: React.FC = () => (
  <svg className="w-3.5 h-3.5 fill-current transition-transform duration-200 ease-in-out group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CalendarIcon: React.FC = () => (
  <svg className="w-3 h-3 fill-secondary-light dark:fill-secondary-dark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.89-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
  </svg>
);

const CompanyIcon: React.FC = () => (
  <svg className="w-3 h-3 fill-secondary-light dark:fill-secondary-dark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
  </svg>
);

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  onClick, 
  showDetailedBadge = false 
}) => {
  const navigate = useNavigate();

  const handleProjectPageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    } else if (project.dedicatedPage) {
      // Navigate to projects page with modal
      navigate(`/projects/${project.id}`);
    }
  };

  const handleExternalLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.links?.external) {
      // Open external link
      window.open(project.links.external, '_blank', 'noopener,noreferrer');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, action: 'project' | 'external') => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (action === 'project') {
        handleProjectPageClick(e as unknown as React.MouseEvent);
      } else if (action === 'external') {
        handleExternalLinkClick(e as unknown as React.MouseEvent);
      }
    }
  };

  // Format date range
  const formatDateRange = () => {
    if (!project.startDate && !project.endDate) return null;
    
    const formatDate = (dateStr: string) => {
      if (dateStr === 'Present') return 'Present';
      if (dateStr.length === 4) return dateStr; // Just year
      const [year, month] = dateStr.split('-');
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${monthNames[parseInt(month) - 1]} ${year}`;
    };

    const start = project.startDate ? formatDate(project.startDate) : '';
    const end = project.endDate ? formatDate(project.endDate) : '';
    
    if (start && end) {
      return start === end ? start : `${start} - ${end}`;
    }
    return start || end;
  };

  const dateRange = formatDateRange();

  return (
    <div 
      className="bg-background-light dark:bg-background-dark border-2 border-border-light dark:border-border-dark rounded-xl p-6 transition-all duration-300 ease-in-out relative overflow-hidden group hover:border-accent-light dark:hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-accent dark:hover:shadow-accent-dark"
      data-project-type={project.projectType}
      data-domain-tags={project.domainTags.join(',')}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="m-0 mb-2 text-primary-light dark:text-primary-dark">{project.title}</h3>
          <div className="flex items-center gap-1 text-secondary-light dark:text-secondary-dark text-sm mb-2">
            <LocationIcon />
            {project.location}
          </div>
          {dateRange && (
            <div className="flex items-center gap-1 text-secondary-light dark:text-secondary-dark text-sm mb-2">
              <CalendarIcon />
              {dateRange}
            </div>
          )}
          {project.company && (
            <div className="flex items-center gap-1 text-secondary-light dark:text-secondary-dark text-sm mb-2">
              <CompanyIcon />
              {project.company.website ? (
                <a 
                  href={project.company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-light dark:text-accent-dark hover:underline transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.company.name}
                </a>
              ) : (
                <span>{project.company.name}</span>
              )}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="inline-block bg-accent-light dark:bg-accent-dark text-white py-1 px-2.5 rounded-xl text-xs font-medium">
          {project.projectType}
        </span>
        {showDetailedBadge && project.dedicatedPage && (
          <span className="bg-green-600 text-white py-1 px-2 rounded-lg text-xs font-medium">
            📄 Detailed writeup
          </span>
        )}
        {project.domainTags.map(tag => (
          <span 
            key={tag} 
            className="bg-dropdown-hover-light dark:bg-dropdown-hover-dark text-primary-light dark:text-primary-dark py-1 px-2 rounded-lg text-xs border border-border-light dark:border-border-dark"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="text-secondary-light dark:text-secondary-dark mb-4 leading-6">
        <ReactMarkdown
          components={{
            a: ({ node, ...props }) => (
              <a
                {...props}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light dark:text-accent-dark hover:underline"
              />
            )
          }}
        >
          {project.description}
        </ReactMarkdown>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map(tech => (
          <span 
            key={tech} 
            className="bg-dropdown-hover-light dark:bg-dropdown-hover-dark text-primary-light dark:text-primary-dark py-1 px-2 rounded-lg text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {(project.dedicatedPage || project.links?.external) && (
        <div className="flex gap-4 items-center">
          {project.dedicatedPage && (
            <button
              className="text-accent-light dark:text-accent-dark text-sm font-medium flex items-center gap-1 group cursor-pointer hover:underline focus:outline-2 focus:outline-accent-light dark:focus:outline-accent-dark focus:outline-offset-2 rounded transition-all duration-200 p-1 -m-1"
              onClick={handleProjectPageClick}
              onKeyPress={(e) => handleKeyPress(e, 'project')}
              tabIndex={0}
            >
              <ArrowIcon />
              {showDetailedBadge ? 'Click to explore project details' : 'Go to project page'}
            </button>
          )}
          {project.links?.external && (
            <button
              className="text-accent-light dark:text-accent-dark text-sm font-medium flex items-center gap-1 cursor-pointer hover:underline focus:outline-2 focus:outline-accent-light dark:focus:outline-accent-dark focus:outline-offset-2 rounded transition-all duration-200 p-1 -m-1"
              onClick={handleExternalLinkClick}
              onKeyPress={(e) => handleKeyPress(e, 'external')}
              tabIndex={0}
            >
              External Link
            </button>
          )}
        </div>
      )}
    </div>
  );
}; 