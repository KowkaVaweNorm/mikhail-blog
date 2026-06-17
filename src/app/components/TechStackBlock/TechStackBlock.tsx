import cls from './TechStackBlock.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { Tag } from '@/shared/ui';

export const TechStackBlock = () => {
    return (
        <>
            <div className={cls.sectionTitle}>
                <FontAwesomeIcon icon={faMicrochip} /> Технологический стек
            </div>
            <div className={cls.techColumns}>
                <div>
                    <h3 className={cls.techHeading}>Frontend</h3>
                    <div className={cls.techShowcase}>
                        <Tag size="medium">React</Tag>
                        <Tag size="medium">Next.js</Tag>
                        <Tag size="medium">Vite</Tag>
                        <Tag size="medium">Webpack</Tag>
                        <Tag size="medium">FSD (Feature Sliced)</Tag>
                        <Tag size="medium">TypeScript</Tag>
                        <Tag size="medium">Redux Toolkit</Tag>
                        <Tag size="medium">Zustand</Tag>
                        <Tag size="medium">TanStack Query</Tag>
                        <Tag size="medium">React Hook Form</Tag>
                        <Tag size="medium">Zod</Tag>
                        <Tag size="medium">Axios</Tag>
                        <Tag size="medium">REST API</Tag>
                        <Tag size="medium">HTML5</Tag>
                        <Tag size="medium">Babel</Tag>
                        <Tag size="medium">PostCSS</Tag>
                        <Tag size="medium">Ant Design</Tag>
                        <Tag size="medium">Storybook</Tag>
                        <Tag size="medium">Chromatic</Tag>
                        <Tag size="medium">ReactChartjs-2</Tag>
                    </div>

                    <h3 className={cls.techHeading}>Backend</h3>
                    <div className={cls.techShowcase}>
                        <Tag size="medium">NestJS</Tag>
                        <Tag size="medium">Node.js</Tag>
                        <Tag size="medium">Microservices</Tag>
                        <Tag size="medium">NATS</Tag>
                        <Tag size="medium">PostgreSQL</Tag>
                        <Tag size="medium">TypeORM</Tag>
                        <Tag size="medium">Redis</Tag>
                    </div>

                    <h3 className={cls.techHeading}>Blockchain / Web3</h3>
                    <div className={cls.techShowcase}>
                        <Tag size="medium">wagmi</Tag>
                        <Tag size="medium">viem</Tag>
                    </div>

                    <h3 className={cls.techHeading}>DevOps & CI/CD</h3>
                    <div className={cls.techShowcase}>
                        <Tag size="medium">Docker</Tag>
                        <Tag size="medium">CI/CD</Tag>
                        <Tag size="medium">npm publishing</Tag>
                        <Tag size="medium">Git</Tag>
                    </div>

                    <h3 className={cls.techHeading}>Testing & Quality</h3>
                    <div className={cls.techShowcase}>
                        <Tag size="medium">Jest</Tag>
                        <Tag size="medium">RTL (React Testing Library)</Tag>
                        <Tag size="medium">E2E</Tag>
                        <Tag size="medium">ESLint</Tag>
                        <Tag size="medium">Prettier</Tag>
                    </div>
                </div>
            </div>
        </>
    );
};
