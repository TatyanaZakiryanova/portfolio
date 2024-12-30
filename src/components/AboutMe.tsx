import { scrollToSection } from './utils';

const AboutMe = () => {
  return (
    <div className="mx-auto p-10 text-text-dark">
      <h2 className="mb-4 text-center text-3xl">Обо мне</h2>
      <div className="flex flex-col gap-6">
        <p>
          Меня зовут Татьяна. Я фронтенд-разработчик, увлекаюсь программированием и постоянно
          стремлюсь улучшать свои навыки. Программирование для меня является инструментом познания
          мира.
        </p>
        <p>
          Я пишу SPA на стеке JS/TS, React, Redux Toolkit. Работаю с Sass, Tailwind CSS, Material
          UI. Знакома с Next.js и серверным рендерингом, проводила регистрацию и авторизацию через
          Firebase. Есть опыт написания юнит-тестов на Jest и React Testing Library.
        </p>
        <p>Сейчас углубляюсь в алгоритмы и структуры данных.</p>
        <div className="flex flex-col items-center text-xs">
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="flex flex-col items-center"
          >
            <img src="/src/assets/icons/arrow-down.svg" className="h-8 w-8 animate-bounce" />
            <div>К проектам</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
