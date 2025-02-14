import { useEffect, useRef, useState } from 'react';

import { scrollToSection } from '../utils';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky left-0 top-0 z-50 w-full rounded-lg bg-blue-light bg-opacity-95 p-6 backdrop-blur lg:bg-opacity-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center p-2 text-text-dark lg:hidden"
        >
          <span className="text-xl">☰</span>
        </button>
        <div
          ref={menuRef}
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute left-0 right-0 top-full z-10 rounded-lg lg:static lg:block lg:flex lg:w-auto lg:justify-between`}
        >
          <ul className="flex flex-col items-center space-y-1 rounded-lg bg-blue-light bg-opacity-95 text-text-dark backdrop-blur lg:flex-row lg:space-x-6 lg:space-y-0 lg:bg-transparent lg:bg-opacity-50 lg:backdrop-blur-none">
            <li className="w-full lg:w-auto" onClick={handleLinkClick}>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
                <Button className="w-full lg:w-auto lg:bg-button-default lg:text-text-light lg:shadow-md">
                  Обо мне
                </Button>
              </a>
            </li>
            <li className="w-full lg:w-auto" onClick={handleLinkClick}>
              <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>
                <Button className="w-full lg:w-auto lg:bg-button-default lg:text-text-light lg:shadow-md">
                  Навыки
                </Button>
              </a>
            </li>
            <li className="w-full lg:w-auto" onClick={handleLinkClick}>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
                <Button className="w-full lg:w-auto lg:bg-button-default lg:text-text-light lg:shadow-md">
                  Проекты
                </Button>
              </a>
            </li>
            <li className="w-full lg:w-auto" onClick={handleLinkClick}>
              <a href="#contacts" onClick={(e) => scrollToSection(e, 'contacts')}>
                <Button className="w-full lg:w-auto lg:bg-button-default lg:text-text-light lg:shadow-md">
                  Контакты
                </Button>
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute right-2 top-2 flex flex-col items-center gap-1 p-2">
          <a href="https://t.me/tzaranova" target="_blank" rel="noopener noreferrer">
            <svg className="h-12 w-12 hover:animate-[wiggle_1s_ease-in-out_infinite]">
              <use href="assets/icons/sprite.svg#icon-tg"></use>
            </svg>
          </a>
          <span className="text-sm text-text-dark">Telegram</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
