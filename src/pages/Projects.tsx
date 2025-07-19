import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { projectsData } from '../data/projects';
import type { Project } from '../types';

export const Projects: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = projectsData.projects.filter(project => project.dedicatedPage);

  useEffect(() => {
    if (projectId) {
      const project = projectsData.projects.find(p => p.id === projectId);
      if (project && project.dedicatedPage) {
        setSelectedProject(project);
      } else {
        navigate('/projects', { replace: true });
      }
    } else {
      setSelectedProject(null);
    }
  }, [projectId, navigate]);

  const handleProjectClick = (project: Project) => {
    if (project.dedicatedPage) {
      setSelectedProject(project);
      navigate(`/projects/${project.id}`);
    }
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    navigate('/projects');
  };

  return (
    <div className="w-full">
      <div className="text-center my-8 mb-12 py-8 border-b border-border-light dark:border-border-dark">
        <h1 className="text-4xl mb-2">Featured Projects</h1>
        <p className="text-secondary-light dark:text-secondary-dark text-lg max-w-2xl mx-auto">
          Detailed showcases of my key research and development projects. Click on any project to learn more about the methodology, implementation, and impact.
        </p>
      </div>

      <section className="my-12">
        <div className="grid grid-cols-1 gap-4">
          {featuredProjects.length === 0 ? (
            <div className="text-center py-12 px-4 text-secondary-light dark:text-secondary-dark">No featured projects available.</div>
          ) : (
            featuredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                showDetailedBadge={true}
                onClick={() => handleProjectClick(project)}
              />
            ))
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}; 