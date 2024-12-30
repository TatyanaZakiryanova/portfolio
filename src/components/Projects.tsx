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
      <div className="flex items-center">
        <div className="mt-6 flex flex-col gap-12">
          {PROJECTS.map((project, index) => (
            <div key={project.title} className="flex gap-6">
              <img
                src={project.previewSrc}
                className="h-[260px] w-[600px] flex-shrink-0 rounded-lg shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p>{project.description}</p>
                <p className="mt-2 font-semibold">{project.technologies}</p>
                <button onClick={() => toggleOpenDetails(index)}>
                  <img
                    src={`${activeIndex === index ? `/src/assets/icons/arrow-up.svg` : '/src/assets/icons/arrow-down.svg'}`}
                    className={`${activeIndex === index ? '' : 'animate-bounce'} mt-4 h-5 w-5`}
                  />
                </button>
                <p className={`mt-2 text-sm ${activeIndex === index ? 'block' : 'hidden'}`}>
                  {project.details}
                </p>
                <div className="mt-4 flex gap-6">
                  <div className="flex flex-col text-center">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-14 w-14 hover:animate-[wiggle_1s_ease-in-out_infinite]"
                    >
                      <img src="src/assets/icons/github-icon.svg" />
                      <span>Github</span>
                    </a>
                  </div>
                  <div className="flex flex-col text-center">
                    <a
                      href={project.deployLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-14 w-14 hover:animate-[wiggle_1s_ease-in-out_infinite]"
                    >
                      <img src="src/assets/icons/site-icon.svg" />
                      <span>Сайт</span>
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
