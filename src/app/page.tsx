import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ContactBlock } from './components/ContactBlock/ContactBlock';
import { Header } from './components/Header/Header';
import { TechStackBlock } from './components/TechStackBlock/TechStackBlock';
import { LastArticles } from './components/LastArticles/LastArticles';

import cls from './page.module.scss';

export default function Home() {
    return (
        <div className={cls.page}>
            <div className={cls.blobBg}>
                <div className={`${cls.blob} ${cls.blob1}`}></div>
                <div className={`${cls.blob} ${cls.blob2}`}></div>
                <div className={`${cls.blob} ${cls.blob3}`}></div>
            </div>

            <div className={cls.container}>
                <Header />

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
                            <button className={cls.btnPrimary} id="projectsBtn">
                                <FontAwesomeIcon icon={faArrowDown} /> заметки
                            </button>
                            <a href="#contacts_block" className={cls.btnOutline} id="connectBtn">
                                <FontAwesomeIcon icon={faPaperPlane} className={cls.letter_icon} /> Контакты
                            </a>
                        </div>
                    </div>
                </section>

                <section className={cls.section} id="projectsSection">
                    <LastArticles />
                </section>

                <section className={cls.section}>
                    <TechStackBlock />
                </section>

                <section className={cls.section} id="contacts_block">
                    <ContactBlock />
                </section>

                <footer className={cls.footer}>
                    <p>© 2025 Михаил · N · блог о программировании</p>
                </footer>
            </div>
        </div>
    );
}
