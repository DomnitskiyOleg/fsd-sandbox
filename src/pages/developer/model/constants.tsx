import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineLinkedin,
} from 'react-icons/ai'
import { PiTelegramLogoLight } from 'react-icons/pi'
import { VscGithubAlt } from 'react-icons/vsc'
import { PiCertificate } from 'react-icons/pi'
import { PiUsers } from 'react-icons/pi'
import { GrLanguage } from 'react-icons/gr'
import { IoBarChartOutline } from 'react-icons/io5'

export const SOCIALS = [
  {
    name: 'linkedin.com/in/domnitskiy-oleg',
    link: 'https://www.linkedin.com/in/domnitskiy-oleg/',
    icon: <AiOutlineLinkedin color='white' size={25} />,
  },
  {
    name: '+7 999 080-70-67',
    link: 'https://api.whatsapp.com/send/?phone=79990807067&text&type=phone_number&app_absent=0',
    icon: <AiOutlineWhatsApp color='white' size={25} />,
  },
  {
    name: 't.me/domnitskiy_oleg',
    link: 'https://t.me/domnitskiy_oleg/',
    icon: <PiTelegramLogoLight color='white' size={25} />,
  },
  {
    name: 'domnitskiy.oleg@mail.ru',
    link: 'domnitskiy.oleg@mail.ru',
    icon: <AiOutlineMail color='white' size={25} />,
    isEmail: true,
  },
  {
    name: 'github.com/DomnitskiyOleg',
    link: 'https://github.com/DomnitskiyOleg/',
    icon: <VscGithubAlt color='white' size={25} />,
  },
]

export const SKILLS = [
  {
    row: ['TypeScript', 'JavaScript', 'NodeJS'],
  },
  {
    row: ['Next JS', 'React', 'Expo', 'React Native'],
  },
  {
    row: ['Redux', 'Redux Toolkit', 'RTK Query'],
  },
  {
    row: ['HTML', 'CSS', 'PostCSS', 'SASS'],
  },
  {
    row: ['Git/GitLab', 'Webpack', 'CI/CD', 'nginx'],
  },
  {
    row: ['REST API', 'Docker', 'Linux'],
  },
  {
    row: ['FSD architecture', 'Atomic Design'],
  },
  {
    row: ['Jest'],
  },
]

export const LANGUAGES = [
  {
    name: 'Русский - native',
  },
  {
    name: 'Английский - intermadiate',
  },
]

export const CERTIFICATES = [
  {
    slug: 'diploma',
    link: 'https://drive.google.com/file/d/1pKooOJe7S23xTGOykuAnHJkHuCcbxgf9/view',
    icon: <PiCertificate size={25} />,
  },
  {
    slug: 'personnel',
    link: 'https://drive.google.com/file/d/1z_ydEXLwWE9_YcuEEVPlUBrJshPxApCX/view?usp=drive_link',
    icon: <PiUsers size={25} />,
  },
  {
    slug: 'english',
    link: 'https://drive.google.com/file/d/1gEyDukuXKCpQvPInEvL1v4yfm-DkxtXV/view?usp=drive_link',
    icon: <GrLanguage size={25} />,
  },
  {
    slug: 'finance',
    link: 'https://drive.google.com/file/d/1la4_q1qxfOIRD4wg8vz6TJCIGSO3vAOM/view?usp=drive_link',
    icon: <IoBarChartOutline size={25} />,
  },
]

export const EXPERIENCE = {
  ru: [
    {
      id: 1,
      position: 'Frontend разработчик',
      companyName: 'ООО АППОМАРТ',
      period: 'Август 2023 - Н.В',
      projects: [
        {
          id: 1,
          name: 'Проект “Appocore” - платформа/ядро для IT продуктов',
          stack: 'NextJS (app router), Redux, RTK Query , Mantine',
          features: [
            'реализовал более 10 таблиц данных для 8 разделов платформы',
            'настроил функционал для таблиц - пагинация, сортировка, фильтрация, поиск',
            'разработал 5 страниц детализаций для различных сущностей',
            'реализовал более 10 модальных окон для функционала (edit, add, delete)',
            'разработал более 15 различных форм с валидацией полей',
            'внедрил инструмент “JSON переводчик” - интеграция с ИИ',
            'внедрил инструмент “Text to Speech” - интеграция с провайдерами голоса',
            'создал drag & drop Канбан доску задач (синхронизируется с backend)',
          ],
        },
        {
          id: 2,
          name: 'Проект “ORP” - Ортопедические исследования',
          stack: 'NextJS (app router), Redux, RTK Query , Mantine',
          features: [
            'настроил ci/cd проекта, задал настройки сервера + nginx',
            'разработал раздел добавления/хранения файлов с системой тегов',
            'внедрил интерактивный SVG - пикер (выбирается травмированная область)',
            'разработал раздел support, интерфейс для чата с пользователями',
            'реализовал брендированный QR код - адаптивный компонент с динамическим valueй',
            'полностью поддерживаю проект и дорабатываю новый функционал',
          ],
        },
        {
          id: 3,
          name: 'Проект “Appomart” - лендинг компании “АППОМАРТ”',
          stack: 'NextJS (page router), Redux, RTK Query, Mantine',
          features: [
            'полностью поддерживаю и дорабатываю сайт компании',
            'реализовал систему фильтрации статей по хэштегам',
            'разработал разделы “Портфолио”, “Достижения” с нуля',
            'сократил на 60% время загрузки раздела “Портфолио” за счет пагинации',
            'выполнил более 30 задач по адаптивной верстке различных компонентов',
          ],
        },
        {
          id: 4,
          name: 'Проект “Исходный Код” - моб. приложение, нумерология',
          stack: 'Expo, React Native, Redux, RTK Query, Magnus',
          features: [
            'разработал систему хранения кэша для сохранения прогресса обучения',
            'реализовал кастомный, интерактивный svg компонент ( Roadmap обучения)',
            'разработал экраны “Карточный расклад”, “Трактовки”, “Обучение”',
            'создал более 15 интерактивных анимируемых компонентов',
            'проработал рендеринг контента в зависимости от наличия платной подписки',
          ],
        },
      ],
    },
    {
      id: 2,
      position: 'Frontend разработчик',
      companyName: 'ООО АДДАМАНТ',
      period: 'Февраль 2023 - Август 2023',
      projects: [
        {
          id: 1,
          name: 'Проект “Vivagifts” - интернет магазин',
          stack:
            'NextJS (page router), Tanstack React Query, Mantine, Zod, Formik',
          features: [
            'отрефакторил логику корзины, улучшив производительность на 30%.',
            'реализовал адаптивную верстку для 80% сайта, улучшив user experience',
            'устранил 90% критических и очевидных ошибок фронтенда.',
            'упростил и оптимизировал более 50% существующих компонентов.',
            'интегрировал Sentry для отслеживания ошибок и  их устранения.',
          ],
        },
      ],
    },
  ],
  en: [
    {
      id: 1,
      position: 'FRONTEND DEVELOPER',
      companyName: 'LLC "APPOMART"',
      period: 'AUGUST  2023 - TO DATE',
      projects: [
        {
          id: 1,
          name: 'Project “Appocore” - platform/core for IT projects',
          stack: 'NextJS (app router), Redux, RTK Query , Mantine',
          features: [
            'implemented over 10 data tables for 8 sections of the platform',
            'set up functionality for tables: pagination, sorting, filtering, search',
            'developed 5 detailed pages for various entities',
            'implemented over 10 modal windows for functionality (edit, add, delete)',
            'developed numerous forms with field validation',
            'integrated a "json translator" tool with ai integration',
            'implemented a "text to speech" tool with voice provider integration',
            'created a drag & drop kanban task board (synchronized with the backend)',
          ],
        },
        {
          id: 2,
          name: 'Project “ORP” - Orthopedic researches',
          stack: 'NextJS (app router), Redux, RTK Query , Mantine',
          features: [
            'set up ci/cd for the project, configured the server and nginx',
            'developed a file upload/storage section with a tagging system',
            'implemented an interactive svg picker (select injured area)',
            'created a branded qr code component with dynamic value',
            'fully support the project and enhance new functionality',
          ],
        },
        {
          id: 3,
          name: 'Project “Appomart” – landing page for the company “APPOMART”',
          stack: 'NextJS (page router), Redux, RTK Query, Mantine',
          features: [
            'fully maintained and enhanced the company’s website',
            'implemented an article filtering system by hashtags',
            'developed the “Portfolio” and “Achievements” sections from scratch',
            'reduced the loading time of the “Portfolio” section by 60% through pagination',
            'completed over 30 tasks related to responsive layout of various components',
          ],
        },
        {
          id: 4,
          name: 'Project “KOD” - mobile app, numerology, meditation',
          stack: 'Expo, React Native, Redux, RTK Query, Magnus',
          features: [
            'developed a caching system to store learning progress',
            'implemented a custom interactive SVG component (Learning Roadmap)',
            'built the “Card Layout”, “Interpretations”, and “Learning” screens',
            'created over 15 interactive animated components',
            'implemented content rendering logic based on paid subscription availability',
          ],
        },
      ],
    },
    {
      id: 2,
      position: 'FRONTEND developer',
      companyName: 'LLC  "Addamant"',
      period: 'FEBREUARY 2023 - AUGUST 2023',
      projects: [
        {
          id: 1,
          name: 'Project “Vivagifts” - e-commerce store',
          stack:
            'NextJS (page router), Tanstack React Query, Mantine, Zod, Formik',
          features: [
            'refactored cart logic to improve performance by 30%.',
            'implemented responsive design for 80% of the site to enhance mobile experience.',
            'resolved 100% of critical and obvious frontend bugs',
            'simplified and optimized 50% of existing components.',
            'integrated Sentry to track runtime issues and speed up bug resolution.',
          ],
        },
      ],
    },
  ],
}
