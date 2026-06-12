import cls from './TechStackBlock.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';

export const TechStackBlock = () => {
    return (
        <>
            <div className={cls.sectionTitle}>
                <FontAwesomeIcon icon={faMicrochip} /> технологический стек
            </div>
            <div className={cls.techColumns}>
                <div>
                    <h3 className={cls.techHeading}>Frontend</h3>
                    <div className={cls.techShowcase}>
                        <span className={cls.skillPill}>React</span>
                        <span className={cls.skillPill}>Next.js</span>
                        <span className={cls.skillPill}>Vite</span>
                        <span className={cls.skillPill}>Webpack</span>
                        <span className={cls.skillPill}>FSD (Feature Sliced)</span>
                        <span className={cls.skillPill}>TypeScript</span>
                        <span className={cls.skillPill}>Redux Toolkit</span>
                        <span className={cls.skillPill}>Zustand</span>
                        <span className={cls.skillPill}>TanStack Query</span>
                        <span className={cls.skillPill}>React Hook Form</span>
                        <span className={cls.skillPill}>Zod</span>
                        <span className={cls.skillPill}>Axios</span>
                        <span className={cls.skillPill}>REST API</span>
                        <span className={cls.skillPill}>HTML5</span>
                        <span className={cls.skillPill}>Babel</span>
                        <span className={cls.skillPill}>PostCSS</span>
                        <span className={cls.skillPill}>Ant Design</span>
                        <span className={cls.skillPill}>Storybook</span>
                        <span className={cls.skillPill}>Chromatic</span>
                        <span className={cls.skillPill}>ReactChartjs-2</span>
                    </div>

                    <h3 className={cls.techHeading}>Backend</h3>
                    <div className={cls.techShowcase}>
                        <span className={cls.skillPill}>NestJS</span>
                        <span className={cls.skillPill}>Node.js</span>
                        <span className={cls.skillPill}>Microservices</span>
                        <span className={cls.skillPill}>NATS</span>
                        <span className={cls.skillPill}>PostgreSQL</span>
                        <span className={cls.skillPill}>TypeORM</span>
                        <span className={cls.skillPill}>Redis</span>
                    </div>

                    <h3 className={cls.techHeading}>Blockchain / Web3</h3>
                    <div className={cls.techShowcase}>
                        <span className={cls.skillPill}>wagmi</span>
                        <span className={cls.skillPill}>viem</span>
                    </div>

                    <h3 className={cls.techHeading}>DevOps & CI/CD</h3>
                    <div className={cls.techShowcase}>
                        <span className={cls.skillPill}>Docker</span>
                        <span className={cls.skillPill}>CI/CD</span>
                        <span className={cls.skillPill}>npm publishing</span>
                        <span className={cls.skillPill}>Git</span>
                    </div>

                    <h3 className={cls.techHeading}>Testing & Quality</h3>
                    <div className={cls.techShowcase}>
                        <span className={cls.skillPill}>Jest</span>
                        <span className={cls.skillPill}>RTL (React Testing Library)</span>
                        <span className={cls.skillPill}>E2E</span>
                        <span className={cls.skillPill}>ESLint</span>
                        <span className={cls.skillPill}>Prettier</span>
                    </div>
                </div>
            </div>
        </>
    );
};
