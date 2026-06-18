import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ContactBlock } from './components/ContactBlock/ContactBlock';
import { TechStackBlock } from './components/TechStackBlock/TechStackBlock';

import cls from './page.module.scss';
import { ProjectsBlock } from './components/ProjectsBlock/ProjectsBlock';

export default function Home() {
    return (
        <div className={cls.container}>
            <section className={cls.hero}>
                <div className={cls.heroContent}>
                    <a href="#contacts_block" className={cls.statusLine}>
                        <span className={cls.pulseDot}></span>
                        <span className={cls.contact_link}>Открыт к сотрудничеству</span>
                    </a>
                    <h1>
                        Михаил · N<br /> Блог о разработке
                    </h1>
                    <p className={cls.heroDesc}>Работаем коллеги!</p>
                    <div className={cls.techMicro}>
                        <span className={cls.techChip}> React</span>
                        <span className={cls.techChip}>Nest</span>
                        <span className={cls.techChip}>Postgres</span>
                        <span className={cls.techChip}>TypeScript</span>
                        <span className={cls.techChip}>Next.js</span>
                        <span className={cls.techChip}> Node.js</span>
                    </div>
                    <div className={cls.btnGroup}>
                        <a href="#projects_section" className={cls.btnPrimary} id="projects_section">
                            <FontAwesomeIcon icon={faArrowDown} /> Проекты
                        </a>
                        <a href="#contacts_block" className={cls.btnOutline} id="connectBtn">
                            <FontAwesomeIcon icon={faPaperPlane} className={cls.letter_icon} /> Контакты
                        </a>
                    </div>
                </div>
            </section>

            {/* <section className={cls.section} id="projectsSection">
                <LastArticles />
            </section> */}

            <section className={cls.section} id="projects_section">
                <ProjectsBlock />
            </section>

            <section className={cls.section}>
                <TechStackBlock />
            </section>

            <section className={cls.section} id="contacts_block">
                <ContactBlock />
            </section>

            <footer className={cls.footer}>
                <p>© 2026 Михаил · N · блог о программировании</p>
            </footer>
        </div>
    );
}
