const AboutMe = () => {
  return (
    <div className="mx-auto p-10">
      <div className="text-text-dark">
        <h2 className="mb-4 text-center text-3xl">Привет</h2>
        <div className="flex items-start">
          <p className="flex-1 text-xl">
            Я фронтенд-разработчик, увлекаюсь программированием и постоянно стремлюсь улучшать свои
            навыки. В работе мне важно не только создавать качественный код, но и обеспечивать
            отличное взаимодействие с пользователем.
          </p>
          <div className="flex flex-col items-center gap-1">
            <a
              href="https://github.com/TatyanaZakiryanova/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="src/assets/github-mark.svg"
                alt="GitHub"
                className="h-20 w-20 hover:animate-[wiggle_1s_ease-in-out_infinite]"
              />
            </a>
            <span className="text-sm">Мой Github</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
