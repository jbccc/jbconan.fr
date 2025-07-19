import React, { useState, useMemo } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { EducationCard } from '../components/EducationCard';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { educationData } from '../data/education';
import type { FilterState } from '../types';

const scrollToFooter = () => {
  const footer = document.querySelector('footer');
  if (footer) {
    footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const Home: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    type: 'all',
    domain: 'all',
    skillToggles: {
      technical: true,
      research: true,
      professional: true
    }
  });

  const [selectedSkillSets, setSelectedSkillSets] = useState<Set<string>>(
    new Set(Object.keys(skillsData.skills))
  );
 
  // Get unique filter options
  const projectTypes = useMemo(() => {
    const types = new Set(projectsData.projects.map(p => p.projectType));
    return ['all', ...Array.from(types)];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projectsData.projects.filter(project => {
      const typeMatch = filters.type === 'all' || project.projectType === filters.type;
      return typeMatch;
    });
  }, [filters.type]);

  // Get filtered skill sets based on selection
  const filteredSkillSets = useMemo(() => {
    return Object.entries(skillsData.skills).filter(([skillSetName]) => 
      selectedSkillSets.has(skillSetName)
    );
  }, [selectedSkillSets]);

  const updateFilter = (filterType: 'type' | 'domain', value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const toggleSkillSet = (skillSetName: string) => {
    setSelectedSkillSets(prev => {
      // If only this skill set is selected, show all
      if (prev.size === 1 && prev.has(skillSetName)) {
        return new Set(Object.keys(skillsData.skills));
      }
      // Otherwise, show only this skill set
      return new Set([skillSetName]);
    });
  };

  return (
    <div className="w-full">
      {/* Contact Banner */}
      <div className="bg-gradient-to-br from-accent-light to-[#5a7fd8] text-white p-6 sm:p-8 my-4 rounded-xl text-center text-lg font-medium shadow-accent dark:shadow-accent-dark border-none relative overflow-hidden flex flex-col sm:flex-row items-center justify-center gap-4 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(74,144,226,0.4)] transition-all duration-300 ease-in-out">
        <span className="z-10">Thanks for visiting! Feel free to reach out if you'd like to connect.</span>
        <div className="relative z-20">
          <button
            className="bg-white/20 border-2 border-white/30 text-white py-3 px-4 rounded-lg cursor-pointer text-lg flex items-center gap-2 transition-all duration-300 ease-in-out backdrop-blur-[10px] hover:bg-white/30 hover:border-white/50 hover:-translate-y-0.5"
            onClick={scrollToFooter}
          >
            📥 Contact Me
          </button>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="my-8 mb-12">
        <h1 className="mb-4 text-3xl">Your Name <span className="phonetic">\jʊr.neɪm\</span></h1>
        <div className="text-lg leading-relaxed text-secondary-light dark:text-secondary-dark">
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <strong>Duis aute irure dolor in reprehenderit</strong> in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

          <p className="mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

          <p className="mb-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. 🚀</p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education-section" className="my-12">
        <h2 className="text-2xl">Education</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {educationData.map(education => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="my-12">
        <h2 className="text-2xl">Projects & Experience</h2>

        <div className="mb-8">
          <div className="mb-6">
            <h3 className="m-0 mb-3 text-base text-primary-light dark:text-primary-dark font-medium">Project Type</h3>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map(type => (
                <button
                  key={type}
                  className={`border-2 py-2 px-4 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out font-inherit text-sm ${filters.type === type
                    ? 'bg-accent-light dark:bg-accent-dark border-accent-light dark:border-accent-dark text-white'
                    : 'bg-transparent text-primary-light dark:text-primary-dark border-border-light dark:border-border-dark hover:bg-accent-light dark:hover:bg-accent-dark hover:border-accent-light dark:hover:border-accent-dark hover:text-white'
                    }`}
                  onClick={() => updateFilter('type', type)}
                >
                  {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12 px-4 text-secondary-light dark:text-secondary-dark col-span-full">No projects match the selected filters.</div>
          ) : (
            filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="my-12">
        <h2 className="text-2xl">Skills & Technologies</h2>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(skillsData.skills).map(([skillSetName, skillSet]) => {
              const isSelected = selectedSkillSets.has(skillSetName);
              const isOnlyOneSelected = selectedSkillSets.size === 1;
              const shouldGrayOut = isOnlyOneSelected && !isSelected;
              
              return (
                <button
                  key={skillSetName}
                  className={`border-2 py-2 px-4 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out font-inherit text-sm ${
                    shouldGrayOut 
                      ? 'opacity-30' 
                      : isSelected
                        ? 'text-white'
                        : 'bg-transparent text-primary-light dark:text-primary-dark border-border-light dark:border-border-dark hover:opacity-80'
                  }`}
                  style={{
                    backgroundColor: isSelected ? skillSet.color : 'transparent',
                    borderColor: skillSet.color
                  }}
                  onClick={() => toggleSkillSet(skillSetName)}
                >
                  {skillSetName}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          {filteredSkillSets.length === 0 ? (
            <div className="text-center py-12 px-4 text-secondary-light dark:text-secondary-dark">
              No skill sets selected.
            </div>
          ) : (
            filteredSkillSets.map(([skillSetName, skillSet]) => (
              <div key={skillSetName} className="space-y-3">
                <h3 
                  className="text-lg font-semibold flex items-center gap-2"
                  style={{ color: skillSet.color }}
                >
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: skillSet.color }}
                  ></span>
                  {skillSetName}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                  {skillSet.skills.map((skill, index) => (
                    <div
                      key={`${skillSetName}-${skill}-${index}`}
                      className="bg-background-light dark:bg-background-dark border-2 rounded-lg p-3 text-center transition-all duration-300 ease-in-out cursor-default hover:scale-105"
                      style={{
                        borderColor: `${skillSet.color}30`,
                        backgroundColor: `${skillSet.color}10`
                      }}
                    >
                      <span className="text-sm font-medium text-primary-light dark:text-primary-dark block">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}; 