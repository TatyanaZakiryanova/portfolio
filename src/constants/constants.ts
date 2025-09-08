import { IIcons, IProjects } from './types';

export const ICONS: IIcons[] = [
  { iconId: '#icon-js', alt: 'JavaScript Logo', title: 'JavaScript' },
  { iconId: '#icon-ts', alt: 'TypeScript Logo', title: 'TypeScript' },
  { iconId: '#icon-react', alt: 'React Logo', title: 'React' },
  { iconId: '#icon-redux', alt: 'Redux Logo', title: 'Redux' },
  { iconId: '#icon-next', alt: 'Next.js Logo', title: 'Next.js' },
  { iconId: '#icon-node', alt: 'Node.js Logo', title: 'Node.js' },
  { iconId: '#icon-express', alt: 'Express Logo', title: 'Express' },
  { iconId: '#icon-nest', alt: 'Nest.js Logo', title: 'Nest.js' },
  { iconId: '#icon-sql', alt: 'SQL Logo', title: 'SQL' },
];

export const PROJECTS: IProjects[] = [
  {
    title: 'Fullstack blog frontend',
    previewSrc: '/assets/projects/fullstackblog-preview.png',
    description: 'Клиентская часть fullstack-приложения блога.',
    technologies: 'TS, React, Redux Toolkit, Material UI, Sass',
    details:
      'Автообновление JWT-токенов, регистрация и авторизация с валидацией форм через React-hook-form. Markdown-редактор для создания постов, редактирование постов и комментариев, загрузка изображений к постам и аватаров.',
    githubLink: 'https://github.com/TatyanaZakiryanova/blog-frontend',
    deployLink: 'https://blog-frontend-rho-bice.vercel.app/',
  },
  {
    title: 'Fullstack blog backend',
    previewSrc: '/assets/projects/fullstackblog-swagger.png',
    description: 'API fullstack-приложения блога.',
    technologies: 'Node.js, TS, Express, PostgreSQL (Prisma ORM)',
    details:
      'JWT-аутентификация, refresh-токены в httpOnly cookies, RBAC, Zod-валидация, загрузка изображений через Cloudinary, Swagger-документация.',
    githubLink: 'https://github.com/TatyanaZakiryanova/blog-backend-prisma',
    deployLink: 'https://blog-frontend-rho-bice.vercel.app/',
  },
  {
    title: 'NASA Data',
    previewSrc: '/assets/projects/nasadata-preview.png',
    description: 'Приложение для коллекционирования фотографий NASA.',
    technologies: 'TS, React, Redux Toolkit, Next.js, Firebase, Tailwind CSS, NASA API',
    details:
      'Позволяет создать профиль через Firebase и добавлять в него фотографии (используются Firestore и Redux Toolkit). Для защиты маршрутов используется AuthContext. Фото дня кэшируется на сутки через next/cache. Перед поиском фото показывается подборка фотографий, которая рендерится на сервере (SSR). Создан кастомный UI.',
    githubLink: 'https://github.com/TatyanaZakiryanova/NASA-Data',
    deployLink: 'https://nasa-data-peach.vercel.app/',
  },
  {
    title: 'Nest.js API',
    previewSrc: '/assets/projects/nestjs-preview.png',
    description: 'API блога на Nest.js.',
    technologies: 'Node.js, Nest.js, PostgreSQL (TypeORM)',
    details:
      'CRUD для постов и комментариев, JWT-аутентификация, загрузка файлов в облако, RBAC, WebSockets для online-статусов, Swagger-документация.',
    githubLink: 'https://github.com/TatyanaZakiryanova/nest-blog',
  },
  {
    title: 'Bookshelf',
    previewSrc: '/assets/projects/bookshelf_preview.png',
    description: 'Приложение для поиска и просмотра электронных книг.',
    technologies: 'TS, React, Redux Toolkit, Sass, Google Books API',
    details:
      'Поиск и предпросмотр книг из библиотеки Google Books. Подробная информация о книге в модальном окне. Фильтрация по цене, языку, релевантности. Redux toolkit для запросов и управления состоянием. Сохранение книг в избранное (redux persist). Собственный UI.',
    githubLink: 'https://github.com/TatyanaZakiryanova/bookshelf',
    deployLink: 'https://tatyanazakiryanova.github.io/bookshelf/',
  },
];

export const EARLY_PROJECTS: IProjects[] = [
  {
    title: 'CRM Dashboard',
    previewSrc: '/assets/projects/dashboard-preview.png',
    description: 'CRM дашборд с возможностью сортировки таблицы и кастомным UI.',
    technologies: 'TS, React, Sass',
    details:
      'Создан UI kit для использования в разных проектах. В таблице реализованы сортировка по столбцам и поиск.',
    githubLink: 'https://github.com/TatyanaZakiryanova/crm-dashboard',
    deployLink: 'https://tatyanazakiryanova.github.io/crm-dashboard/',
  },
  {
    title: 'Currency Converter',
    previewSrc: '/assets/projects/currency-converter-preview.png',
    description: 'Конвертер валют.',
    technologies: 'TS, React, Material UI, ExchangeRate-API',
    details:
      'Конвертация валют. График истории изменений курса валюты в течение трёх последних дней (библиотека recharts). Таблица с текущим курсом популярных валют, новости о финансах. ',
    githubLink: 'https://github.com/TatyanaZakiryanova/currency-converter',
    deployLink: 'https://tatyanazakiryanova.github.io/currency-converter/',
  },
  {
    title: 'Weather App',
    previewSrc: '/assets/projects/weatherapp_preview.png',
    description: 'Приложение погоды.',
    technologies: 'TS, React, OpenWeatherMap-API',
    details:
      'Приложение погоды с динамической сменой иконок. Запрашивает геолокацию пользователя для определения погоды. Тестирование компонентов на Jest и React Testing Library.',
    githubLink: 'https://github.com/TatyanaZakiryanova/weather-app',
    deployLink: 'https://tatyanazakiryanova.github.io/weather-app/',
  },
];
