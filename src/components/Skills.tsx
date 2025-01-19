import { ICONS } from '../constants';

const Skills = () => {
  const iconClasses = 'w-24 h-28 transition-transform duration-300 hover:scale-110 sm:w-28';

  return (
    <div className="mx-auto p-10 text-text-dark">
      <h2 className="text-center text-3xl">Навыки</h2>
      <div className="flex items-center justify-center">
        <div className="mt-20 flex flex-wrap items-center justify-center gap-6">
          {ICONS.map((icon) => (
            <div key={icon.alt} className="group flex flex-col items-center gap-4">
              <svg className={iconClasses}>
                <use href={`/assets/icons/sprite.svg${icon.iconId}`}></use>
              </svg>
              <span className="text-lg opacity-0 transition-all duration-500 group-hover:opacity-100">
                {icon.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
