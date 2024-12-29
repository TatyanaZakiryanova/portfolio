import Button from './Button';

const Navbar = () => {
  return (
    <nav className="sticky left-0 top-0 z-50 w-full bg-blue-light bg-opacity-50 p-6 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="space-x-6">
          <Button>
            <a href="#about">Обо мне</a>
          </Button>
          <Button>
            <a href="#skills">Навыки</a>
          </Button>
          <Button>
            <a href="#projects">Проекты</a>
          </Button>
          <Button>
            <a href="#contacts">Контакты</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
