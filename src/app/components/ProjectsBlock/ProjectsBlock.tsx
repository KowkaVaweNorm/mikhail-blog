import cls from './ProjectsBlock.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { ProjectCard } from './ProjectCard/ProjectCard';

export const ProjectsBlock = () => {
    return (
        <>
            <div className={cls.sectionTitle}>
                <FontAwesomeIcon icon={faRocket} /> опыт работы
            </div>
            <div className={cls.projectsGrid}>
                {/* Проект 1 - Concero */}
                <ProjectCard
                    title="Concero"
                    role="Fullstack Developer"
                    description="Крупный Web3-проект с публичной платформой для более чем 200 000 пользователей. Полный цикл разработки — от архитектуры бэкенда до клиентской части и дизайн-системы."
                    achievements={[
                        'Оптимизировал критически важные cron-операции, сократив время выполнения с нескольких часов до секунд через рефакторинг запросов и архитектуры',
                        'Провел миграцию бэкенда с Express на микросервисную архитектуру NestJS + TypeORM + PostgreSQL за 6 месяцев',
                        'Разработал и опубликовал npm-библиотеку UI-компонентов @concero/ui-kit с полноценной Storybook документацией',
                        'Внедрил Web3-интеграцию (wagmi/viem) и систему квестов, профилей и трекинга активности для пользователей',
                    ]}
                    techStack={['React', 'NestJS', 'PostgreSQL', 'Redis', 'NATS', 'viem', 'wagmi', 'TypeORM']}
                    projectUrl="https://concero.io"
                    images={['/assets/portfolio/concero-quests.png', '/assets/portfolio/concero-quest.png']}
                    imageAlt="Concero проект скриншот"
                />

                {/* Проект 2 - Industrial Planning System */}
                <ProjectCard
                    title="Industrial Planning System"
                    role="Frontend Developer"
                    description="Промышленная система планирования для крупного предприятия. Работа в команде над созданием сложных интерфейсов для анализа и управления производственными данными."
                    achievements={[
                        'Разработал модуль динамического редактирования таблиц с переменным количеством колонок и строк на React + RTK Query',
                        'Реализовал интерактивные дашборды визуализации данных с react-chartjs-2 и автоматическую генерацию Excel-отчетов с валидацией через Zod',
                        'Провел рефакторинг всей кодовой базы на архитектуру Feature-Sliced Design (FSD)',
                        'Настроил Docker-контейнеры для dev/prod окружений',
                    ]}
                    techStack={['React', 'Ant Design', 'Redux Toolkit', 'RTK Query', 'FSD', 'Docker', 'Zod']}
                />

                {/* Проект 3 - Fleet Management System */}
                <ProjectCard
                    title="Fleet Management System"
                    role="Frontend Developer"
                    description="Система управления автопарком с разграничением доступа для разных ролей пользователей. Комплексное решение для мониторинга и управления транспортными средствами."
                    achievements={[
                        'Внедрил многоуровневую систему уведомлений (SMS, email) и контроль доступа на основе ролей с JWT-авторизацией',
                        'Настроил комплексное тестирование ключевого функционала с Jest, React Testing Library и E2E-тестами',
                        'Управлял конфигурацией Webpack и поддерживал стандарты качества кода через ESLint, Prettier и Babel',
                    ]}
                    techStack={['React', 'Ant Design', 'Redux', 'Jest', 'RTL', 'Webpack', 'ESLint']}
                />

                {/* Проект 4 - CRM система */}
                <ProjectCard
                    title="CRM система"
                    role="Fullstack программист"
                    description="Разработка CRM системы для внутренних сотрудников, руководства и колл-центра. Команда из 10 человек."
                    achievements={[
                        'Интеграция PHP с PostgreSQL',
                        'Написание полнотекстового приоритетного поиска с нуля на SQL и дальнейшей фильтрацией на PHP',
                        'Поддержка аутентификации и авторизации',
                        'Написание системы рассрочки с нуля',
                        'Вывод агрегированных данных из разных схем PostgreSQL',
                    ]}
                    techStack={['HTML', 'CSS', 'JS', 'React', 'PHP', 'PostgreSQL', 'SQL', 'Docker', 'Webpack', 'Nginx']}
                />
            </div>
        </>
    );
};
