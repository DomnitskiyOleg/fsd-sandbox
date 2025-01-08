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

export const PROJECTS = [
    {
        slug: 'appocore',
        link: 'https://drive.google.com/file/d/1pKooOJe7S23xTGOykuAnHJkHuCcbxgf9/view',
        whatDone: ['1', '2', '3', '4', '5', '6', '7', '8'],
    },
    {
        slug: 'orp',
        link: 'https://drive.google.com/file/d/1pKooOJe7S23xTGOykuAnHJkHuCcbxgf9/view',
        whatDone: ['1', '2', '3', '4', '5', '6'],
    },
    {
        slug: 'appomart',
        link: 'https://drive.google.com/file/d/1pKooOJe7S23xTGOykuAnHJkHuCcbxgf9/view',
        whatDone: ['1', '2', '3', '4', '5'],
    },
    {
        slug: 'kod',
        link: 'https://drive.google.com/file/d/1pKooOJe7S23xTGOykuAnHJkHuCcbxgf9/view',
        whatDone: ['1', '2', '3', '4', '5'],
    },
]
