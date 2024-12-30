import { ICONS } from '../constants';

const Skills = () => {
  const iconClasses = 'w-24 transition-transform duration-300 hover:scale-110 sm:w-28';

  return (
    <div className="mx-auto p-10">
      <h2 className="text-center text-3xl">Навыки</h2>
      <div className="flex items-center justify-center text-text-dark">
        <div className="mt-2 flex flex-wrap items-center justify-center gap-6">
          {ICONS.map((icon) => (
            <img key={icon.alt} src={icon.src} className={iconClasses} alt={icon.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
