import { useState } from 'react';
import { scrollToSection } from '../utils';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky left-0 top-0 z-50 w-full bg-blue-light bg-opacity-95 p-6 backdrop-blur lg:bg-opacity-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center p-2 text-text-dark lg:hidden"
        >
          <span className="text-xl">☰</span>
        </button>

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute left-0 right-0 top-full z-10 rounded-lg lg:static lg:block lg:flex lg:w-auto lg:justify-between`}
        >
          <ul className="flex flex-col items-center space-y-1 rounded-lg bg-blue-light bg-opacity-95 text-text-dark backdrop-blur lg:flex-row lg:space-x-6 lg:space-y-0 lg:bg-transparent lg:bg-opacity-50 lg:backdrop-blur-none">
            <li className="w-full lg:w-auto">
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
                <Button className="w-full lg:w-auto lg:bg-button-default lg:text-text-light lg:shadow-md">
                  Обо мне
                </Button>
              </a>
            </li>
            <li className="w-full lg:w-auto">
              <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>
                <Button className="w-full lg:w-auto lg:bg-button-default lg:text-text-light lg:shadow-md">
                  Навыки
                </Button>
              </a>
            </li>
            <li className="w-full lg:w-auto">
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
                <Button className="w-full lg:w-auto lg:bg-button-default lg:text-text-light lg:shadow-md">
                  Проекты
                </Button>
              </a>
            </li>
            <li className="w-full lg:w-auto">
              <a href="#contacts" onClick={(e) => scrollToSection(e, 'contacts')}>
                <Button className="w-full lg:w-auto lg:bg-button-default lg:text-text-light lg:shadow-md">
                  Контакты
                </Button>
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute right-0 top-0 flex flex-col items-center gap-1 p-2">
          <a
            href="https://github.com/TatyanaZakiryanova/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/icons/github-icon.svg"
              alt="GitHub"
              className="h-16 w-16 hover:animate-[wiggle_1s_ease-in-out_infinite]"
            />
          </a>
          <span className="text-sm text-text-dark">Мой Github</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
