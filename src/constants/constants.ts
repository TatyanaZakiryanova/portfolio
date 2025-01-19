import { IIcons, IProjects } from './types';

export const ICONS: IIcons[] = [
  { iconId: '#icon-html', alt: 'HTML Logo', title: 'HTML 5' },
  { iconId: '#icon-css', alt: 'CSS Logo', title: 'CSS 3' },
  { iconId: '#icon-js', alt: 'JavaScript Logo', title: 'JavaScript' },
  { iconId: '#icon-ts', alt: 'TypeScript Logo', title: 'TypeScript' },
  { iconId: '#icon-react', alt: 'React Logo', title: 'React' },
  { iconId: '#icon-redux', alt: 'Redux Logo', title: 'Redux' },
  { iconId: '#icon-next', alt: 'Next.js Logo', title: 'Next.js' },
  { iconId: '#icon-sass', alt: 'Sass Logo', title: 'Sass' },
  { iconId: '#icon-tailwind', alt: 'Tailwind CSS Logo', title: 'Tailwind CSS' },
];

export const PROJECTS: IProjects[] = [
  {
    title: 'NASA-Data',
    previewSrc: '/assets/projects/nasadata-preview.png',
    description: 'Приложение с фотографиями NASA.',
    technologies: 'TS, React, Redux Toolkit, Next.js, Firebase, Tailwind CSS, NASA API',
    details:
      'Позволяет создать профиль через Firebase и добавлять в него фотографии (используются Firestore и Redux Toolkit). Для защиты маршрутов используется AuthContext. Фото дня кэшируется на сутки через next/cache. Перед поиском фото показывается подборка фотографий, которая рендерится на сервере (SSR).',
    githubLink: 'https://github.com/TatyanaZakiryanova/NASA-Data',
    deployLink: 'https://datanasa.netlify.app/',
  },
  {
    title: 'Bookshelf',
    previewSrc: '/assets/projects/bookshelf-preview.png',
    description: 'Приложение для поиска и просмотра электронных книг.',
    technologies: 'TS, React, Redux Toolkit, Sass, Google Books API',
    details:
      'Поиск и предпросмотр книг из библиотеки Google Books. Подробная информация о книге в модальном окне. Фильтрация по цене, языку, релевантности. Redux toolkit для запросов и управления состоянием. Сохранение книг в избранное (redux persist).',
    githubLink: 'https://github.com/TatyanaZakiryanova/bookshelf',
    deployLink: 'https://bookshelfsearch.netlify.app/',
  },
  {
    title: 'Currency converter',
    previewSrc: '/assets/projects/currency-converter-preview.png',
    description: 'Конвертер валют.',
    technologies: 'TS, React, Material UI, ExchangeRate-API',
    details:
      'Конвертация валют. График истории изменений курса валюты в течение трёх последних дней (библиотека recharts). Таблица с текущим курсом популярных валют, новости о финансах. ',
    githubLink: 'https://github.com/TatyanaZakiryanova/currency-converter',
    deployLink: 'https://tatyanazakiryanova.github.io/currency-converter/',
  },
  {
    title: 'Tea shop',
    previewSrc: '/assets/projects/teashop-preview.png',
    description: 'Интернет-магазин чая.',
    technologies: 'TS, React, Redux Toolkit, Sass',
    details:
      'Для получения списка товаров и управления состоянием используется Redux toolkit. Фильтрация товаров по категориям, цене, названию, рейтингу. Поиск, пагинация, добавление в корзину (localStorage).',
    githubLink: 'https://github.com/TatyanaZakiryanova/tea-shop',
    deployLink: 'https://teaonlinestore.netlify.app/',
  },
  {
    title: 'CRM Dashboard',
    previewSrc: '/assets/projects/dashboard-preview.png',
    description: 'CRM дашборд с возможностью сортировки таблицы.',
    technologies: 'TS, React, Sass',
    details:
      'Создан небольшой UI kit для использования в разных проектах. В таблице реализована сортировка по столбцам и поиск.',
    githubLink: 'https://github.com/TatyanaZakiryanova/crm-dashboard',
    deployLink: 'https://tatyanazakiryanova.github.io/crm-dashboard/',
  },
];
