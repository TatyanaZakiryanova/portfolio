import Button from './Button';

const Navbar = () => {
  return (
    <nav className="bg-blue-light sticky left-0 top-0 z-50 w-full bg-opacity-50 p-6 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="space-x-6">
          <Button>Обо мне</Button>
          <Button>Навыки</Button>
          <Button>Проекты</Button>
          <Button>Контакты</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
