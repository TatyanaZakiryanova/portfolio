import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className="mx-auto p-10">
      <h2 className="text-center text-3xl">Проекты</h2>
      <div className="flex items-center text-text-dark">
        <div className="mt-6 flex flex-col gap-12">
          {PROJECTS.map((project) => (
            <div key={project.title} className="flex gap-4">
              <img
                src={project.previewSrc}
                className="h-[260px] w-[600px] flex-shrink-0 rounded-lg shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p>{project.description}</p>
                <p className="mt-2 font-semibold">{project.technologies}</p>
                <p className="mt-2 text-sm">{project.details}</p>
                <div className="mt-6 flex gap-6">
                  <div className="flex flex-col text-center">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-14 w-14 hover:animate-[wiggle_1s_ease-in-out_infinite]"
                    >
                      <img src="/icons/github-icon.svg" />
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
                      <img src="/icons/site-icon.svg" />
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
