import { IIcons, IProjects } from './types';

export const ICONS: IIcons[] = [
  { src: 'src/assets/icons/js-icon.svg', alt: 'JavaScript Logo', title: 'JavaScript' },
  { src: 'src/assets/icons/ts-icon.svg', alt: 'TypeScript Logo', title: 'TypeScript' },
  { src: 'src/assets/icons/react-icon.svg', alt: 'React Logo', title: 'React' },
  { src: 'src/assets/icons/redux-icon.svg', alt: 'Redux Logo', title: 'Redux' },
  { src: 'src/assets/icons/next-icon.svg', alt: 'Next.js Logo', title: 'Next.js' },
  { src: 'src/assets/icons/sass-icon.svg', alt: 'Sass Logo', title: 'Sass' },
  { src: 'src/assets/icons/tailwind-icon.svg', alt: 'Tailwind CSS Logo', title: 'Tailwind CSS' },
  { src: 'src/assets/icons/material-ui-icon.svg', alt: 'Material-UI Logo', title: 'Material UI' },
];

export const PROJECTS: IProjects[] = [
  {
    title: 'NASA-Data',
    previewSrc: 'src/assets/projects/nasadata-preview.png',
    description: 'Приложение с фотографиями NASA.',
    technologies: 'TS, React, Redux Toolkit, Next.js, Firebase, Tailwind CSS, NASA API',
    details:
      'Позволяет создать профиль через Firebase и добавлять в него фотографии (используются Firestore и Redux Toolkit). Для защиты маршрутов используется AuthContext. Фото дня кэшируется на сутки через next/cache. Перед поиском фото показывается подборка фотографий, которая рендерится на сервере (SSR).',
    githubLink: 'https://github.com/TatyanaZakiryanova/NASA-Data',
    deployLink: '',
  },
  {
    title: 'Bookshelf',
    previewSrc: 'src/assets/projects/bookshelf-preview.png',
    description: 'Приложение для поиска и просмотра электронных книг.',
    technologies: 'TS, React, Redux Toolkit, Sass, Google Books API',
    details:
      'Поиск и предпросмотр книг из библиотеки Google Books. Подробная информация о книге в модальном окне. Фильтрация по цене, языку, релевантности. Redux toolkit для запросов и управления состоянием. Сохранение книг в избранное (redux persist).',
    githubLink: 'https://github.com/TatyanaZakiryanova/bookshelf',
    deployLink: 'https://bookshelfsearch.netlify.app/',
  },
  {
    title: 'Currency converter',
    previewSrc: 'src/assets/projects/currency-converter-preview.png',
    description: 'Конвертер валют.',
    technologies: 'TS, React, Material UI, ExchangeRate-API',
    details:
      'Конвертация валют. График истории изменений курса валюты в течение трёх последних дней (библиотека recharts). Таблица с текущим курсом популярных валют, новости о финансах. ',
    githubLink: 'https://github.com/TatyanaZakiryanova/currency-converter',
    deployLink: 'https://tatyanazakiryanova.github.io/currency-converter/',
  },
  {
    title: 'Tea shop',
    previewSrc: 'src/assets/projects/teashop-preview.png',
    description: 'Интернет-магазин чая.',
    technologies: 'TS, React, Redux Toolkit, Sass',
    details:
      'Для получения списка товаров и управления состоянием используется Redux toolkit. Фильтрация товаров по категориям, цене, названию, рейтингу. Поиск, пагинация, добавление в корзину (localStorage).',
    githubLink: 'https://github.com/TatyanaZakiryanova/tea-shop',
    deployLink: 'https://teaonlinestore.netlify.app/',
  },
];
