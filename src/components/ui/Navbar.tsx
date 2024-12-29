import { scrollToSection } from '../utils';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="sticky left-0 top-0 z-50 w-full bg-blue-light bg-opacity-50 p-6 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="space-x-6">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
            <Button>Обо мне</Button>
          </a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>
            <Button>Навыки</Button>
          </a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
            <Button>Проекты</Button>
          </a>
          <a href="#contacts" onClick={(e) => scrollToSection(e, 'contacts')}>
            <Button>Контакты</Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
