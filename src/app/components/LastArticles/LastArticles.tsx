import cls from './LastArticles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPenFancy,
    faChartSimple,
    faChartLine,
    faDatabase,
    faLock,
    faBrain,
    faCommentDots,
    faImage,
    faChargingStation,
    faVrCardboard,
    faCube,
    faHandPointer,
    faDownload,
    faCodeBranch,
    faRocket,
} from '@fortawesome/free-solid-svg-icons';
import { faDocker } from '@fortawesome/free-brands-svg-icons';

export const LastArticles = () => {
    return (
        <>
            <div className={cls.sectionTitle}>
                <FontAwesomeIcon icon={faPenFancy} /> последние записи
            </div>
            <div className={cls.projectsGrid}>
                {/* Карточка 1 - Оптимизация React */}
                <div className={cls.projectCard}>
                    <div className={cls.imgPlaceholder}>
                        <FontAwesomeIcon icon={faChartSimple} /> <span>⚡ производительность</span>
                    </div>
                    <div className={cls.projectContent}>
                        <div className={cls.projectTitle}>Оптимизация React</div>
                        <ul className={cls.featureList}>
                            <li>
                                <FontAwesomeIcon icon={faChartLine} /> Мемоизация и кэширование
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faDatabase} /> Ленивая загрузка модулей
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faLock} /> Профилирование и бандл-анализ
                            </li>
                        </ul>
                        <div className={cls.projectTech}>
                            <span>React.memo</span>
                            <span>useCallback</span>
                            <span>Webpack</span>
                            <span>Bundlephobia</span>
                        </div>
                    </div>
                </div>

                {/* Карточка 2 - Умный TypeScript */}
                <div className={cls.projectCard}>
                    <div className={cls.imgPlaceholder}>
                        <FontAwesomeIcon icon={faBrain} /> <span>🧠 TypeScript</span>
                    </div>
                    <div className={cls.projectContent}>
                        <div className={cls.projectTitle}>Умный TypeScript</div>
                        <ul className={cls.featureList}>
                            <li>
                                <FontAwesomeIcon icon={faCommentDots} /> Условные типы и infer
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faImage} /> Маппинг типов
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faChargingStation} /> Защитники типов
                            </li>
                        </ul>
                        <div className={cls.projectTech}>
                            <span>Generics</span>
                            <span>Template Literals</span>
                            <span>typeof</span>
                            <span>keyof</span>
                        </div>
                    </div>
                </div>

                {/* Карточка 3 - Next.js 15 фичи */}
                <div className={cls.projectCard}>
                    <div className={cls.imgPlaceholder}>
                        <FontAwesomeIcon icon={faVrCardboard} /> <span>🔮 Fullstack Next.js</span>
                    </div>
                    <div className={cls.projectContent}>
                        <div className={cls.projectTitle}>Next.js 15 фичи</div>
                        <ul className={cls.featureList}>
                            <li>
                                <FontAwesomeIcon icon={faCube} /> Server Actions и Partial Prerendering
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faHandPointer} /> Потоковая передача
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faDownload} /> Middleware и интерсепторы
                            </li>
                        </ul>
                        <div className={cls.projectTech}>
                            <span>App Router</span>
                            <span>React Server Components</span>
                            <span>next/font</span>
                        </div>
                    </div>
                </div>

                {/* Карточка 4 - CI/CD пайплайны */}
                <div className={cls.projectCard}>
                    <div className={cls.imgPlaceholder}>
                        <FontAwesomeIcon icon={faCodeBranch} /> <span>🔄 CI/CD пайплайны</span>
                    </div>
                    <div className={cls.projectContent}>
                        <div className={cls.projectTitle}>Автоматизация деплоя</div>
                        <ul className={cls.featureList}>
                            <li>
                                <FontAwesomeIcon icon={faRocket} /> GitHub Actions
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faChartSimple} /> Docker-сборка
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faDocker} /> Мультистейджинг
                            </li>
                        </ul>
                        <div className={cls.projectTech}>
                            <span>Docker</span>
                            <span>GitHub Actions</span>
                            <span>Vercel</span>
                            <span>Playwright</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
