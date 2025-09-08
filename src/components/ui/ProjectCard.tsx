import { IProjects } from '../../constants/types';

interface ProjectCardProps {
  project: IProjects;
  index: number;
  activeIndex: number | null;
  toggleOpenDetails: (index: number) => void;
}

const ProjectCard = ({ project, index, activeIndex, toggleOpenDetails }: ProjectCardProps) => {
  return (
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
          <svg className={`${activeIndex === index ? '' : 'animate-bounce'} h-4 w-4`}>
            <use
              href={`${activeIndex === index ? `assets/icons/sprite.svg#icon-arrow-up` : `assets/icons/sprite.svg#icon-arrow-down`}`}
            ></use>
          </svg>
          <span className="text-xs">Подробнее</span>
        </button>
        <p className={`mt-2 text-sm ${activeIndex === index ? 'block' : 'hidden'}`}>
          {project.details}
        </p>
        <div className="mt-4 flex justify-center gap-6 lg:justify-start">
          <div className="flex flex-col text-center">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <svg className="h-14 w-14 hover:animate-[wiggle_1s_ease-in-out_infinite]">
                <use href="assets/icons/sprite.svg#icon-github"></use>
              </svg>
              <span className="text-xs">Github</span>
            </a>
          </div>
          <div className="flex flex-col text-center">
            {project.deployLink && (
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                <svg className="h-14 w-14 hover:animate-[wiggle_1s_ease-in-out_infinite]">
                  <use href="assets/icons/sprite.svg#icon-site"></use>
                </svg>
                <span className="text-xs">Сайт</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
