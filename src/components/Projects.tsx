import { useState } from 'react';

import { PROJECTS } from '../constants';

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
            <div
              key={project.title}
              className="flex flex-col items-center gap-8 lg:flex-row lg:items-start"
            >
              <img
                src={project.previewSrc}
                className="h-auto w-full flex-shrink-0 rounded-lg object-cover shadow-md lg:w-[600px]"
              />
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p>{project.description}</p>
                <p className="mt-2 font-bold">{project.technologies}</p>
                <button
                  onClick={() => toggleOpenDetails(index)}
                  className="mx-auto mt-4 flex items-center justify-center gap-1 lg:mx-0"
                >
                  <img
                    src={`${activeIndex === index ? `/assets/icons/arrow-up.svg` : '/assets/icons/arrow-down.svg'}`}
                    className={`${activeIndex === index ? '' : 'animate-bounce'} h-4 w-4`}
                  />
                  <span className="text-xs">Подробнее</span>
                </button>
                <p className={`mt-2 text-sm ${activeIndex === index ? 'block' : 'hidden'}`}>
                  {project.details}
                </p>
                <div className="mt-4 flex justify-center gap-6 lg:justify-start">
                  <div className="flex flex-col text-center">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-14 w-14 hover:animate-[wiggle_1s_ease-in-out_infinite]"
                    >
                      <img src="/assets/icons/github-icon.svg" />
                      <span className="text-xs">Github</span>
                    </a>
                  </div>
                  <div className="flex flex-col text-center">
                    <a
                      href={project.deployLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-14 w-14 hover:animate-[wiggle_1s_ease-in-out_infinite]"
                    >
                      <img src="/assets/icons/site-icon.svg" />
                      <span className="text-xs">Сайт</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
