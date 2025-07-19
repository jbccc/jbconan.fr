import React from 'react';
import type { Education } from '../data/education';

interface EducationCardProps {
  education: Education;
}

export const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark border-2 border-border-light dark:border-border-dark rounded-xl p-6 transition-all duration-300 ease-in-out hover:border-accent-light dark:hover:border-accent-dark hover:-translate-y-1 hover:shadow-lg h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-primary-light dark:text-primary-dark mb-3 min-h-[2rem]">
          {education.school}
        </h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark px-3 py-1 rounded-full border border-accent-light/20 dark:border-accent-dark/20">
              {education.degreeType}
            </span>
          </div>
          <div className="text-sm text-secondary-light dark:text-secondary-dark flex items-center gap-3">
            <span>📍 {education.location}</span>
            {education.endDate && (
              <span>🎓 {education.endDate}</span>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-3 flex-grow">
        <div>
          <h4 className="font-medium text-primary-light dark:text-primary-dark mb-1">
            {education.degree}
          </h4>
          <p className="text-secondary-light dark:text-secondary-dark text-sm">
            {education.description}
          </p>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-border-light/50 dark:border-border-dark/50">
        <div className="text-sm text-secondary-light dark:text-secondary-dark">
          GPA: <span className="font-semibold text-accent-light dark:text-accent-dark">{education.gpa}</span>
        </div>
      </div>
    </div>
  );
};
