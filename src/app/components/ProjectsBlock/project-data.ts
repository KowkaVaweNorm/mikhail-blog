import { ProjectCardProps } from './ProjectCard/ProjectCard';
import config from '~/next.config';

const basePath = config.basePath;
export const PROJECTS_DATA: ProjectCardProps[] = [
    {
        title: 'Concero',
        role: 'Fullstack Developer',
        description:
            'Web3-проект с публичной платформой для более чем 200 000 пользователей. Полный цикл разработки — от архитектуры бэкенда до клиентской части и дизайн-системы.',
        achievements: [
            'Оптимизировал cron-операции, с нескольких часов до секунд',
            'Провел миграцию кодовой базы бэкенда с Express на микросервисную архитектуру на NestJS + TypeORM + PostgreSQL',
            'Разработал и опубликовал npm-библиотеку UI-компонентов @concero/ui-kit с полноценной Storybook документацией',
        ],
        techStack: ['React', 'NestJS', 'PostgreSQL', 'Redis', 'NATS', 'viem', 'wagmi', 'TypeORM'],
        projectUrl: 'https://concero.io',
        images: [`${basePath}/assets/portfolio/concero-quests.png`, `${basePath}/assets/portfolio/concero-quest.png`],
        imageAlt: 'Concero проект скриншот',
    },
    {
        title: 'Система для Нефтезавода',
        role: 'Frontend Developer',
        description:
            'Система для анализа оптимального смешения нефти. Например как из Х компонентов собрать АИ-92 чтобы и дешево и по госту',
        achievements: [
            'Разработал модуль динамического редактирования таблиц с переменным количеством колонок и строк',
            'Реализовал интерактивные дашборды визуализации данных и автоматическую генерацию Excel-отчетов',
        ],
        images: [`${basePath}/assets/portfolio/npz-ui.jpg`, `${basePath}/assets/portfolio/npz-ui2.jpg`],
        imageAlt: 'Нефтезавод скриншот',
        techStack: ['React', 'Ant Design', 'Redux Toolkit', 'RTK Query', 'FSD', 'Docker', 'Zod'],
    },
    {
        title: 'Fleet Management System',
        role: 'Frontend Developer',
        description:
            'Система управления флотом. Комплексное решение для мониторинга и управления транспортными средствами.',
        achievements: [
            'Внедрил многоуровневую систему уведомлений (SMS, email) и контроль доступа на основе ролей с JWT-авторизацией',
            'Настроил комплексное тестирование ключевого функционала с Jest, React Testing Library и E2E-тестами',
            'Управлял конфигурацией Webpack и поддерживал стандарты качества кода через ESLint, Prettier и Babel',
        ],
        techStack: ['React', 'Ant Design', 'Redux', 'Jest', 'RTL', 'Webpack', 'ESLint'],
    },
    {
        title: 'CRM система',
        role: 'Fullstack программист',
        description:
            'Разработка CRM системы для внутренних сотрудников, руководства и колл-центра. Команда из 10 человек.',
        achievements: [
            'Интеграция PHP с PostgreSQL',
            'Написание полнотекстового приоритетного поиска с нуля на SQL и дальнейшей фильтрацией на PHP',
            'Поддержка аутентификации и авторизации',
            'Написание системы рассрочки с нуля',
            'Вывод агрегированных данных из разных схем PostgreSQL',
        ],
        techStack: ['HTML', 'CSS', 'JS', 'React', 'PHP', 'PostgreSQL', 'SQL', 'Docker', 'Webpack', 'Nginx'],
    },
];
