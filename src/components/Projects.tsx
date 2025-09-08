import { useState } from 'react';

import { EARLY_PROJECTS, PROJECTS } from '../constants';
import ProjectCard from './ui/ProjectCard';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleOpenDetails = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto p-10 text-text-dark">
      <h2 className="text-center text-3xl">Проекты</h2>
      <div className="mt-10 flex items-center justify-center">
        <div className="mt-6 flex flex-col gap-20">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              activeIndex={activeIndex}
              toggleOpenDetails={toggleOpenDetails}
            />
          ))}

          <h3 className="text-center text-2xl">Ранние проекты</h3>
          <div className="mt-2 flex flex-col gap-20">
            {EARLY_PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index + PROJECTS.length}
                activeIndex={activeIndex}
                toggleOpenDetails={toggleOpenDetails}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
