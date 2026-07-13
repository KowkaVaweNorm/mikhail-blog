import { ContactLink } from '@/entities/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import cls from './ContactBlock.module.scss';

export const ContactBlock = () => {
    return (
        <div className={cls.contactStrip} id="contacts_block">
            <div className={cls.header}>
                <FontAwesomeIcon icon={faHandshake} className={cls.headerIcon} />
                <h3 className={cls.contactTitle}>Контакты</h3>
                <p className={cls.contactDesc}></p>
            </div>

            <address className={cls.verticalLinks}>
                <ContactLink
                    icon={<FontAwesomeIcon icon={faGithub} />}
                    href="https://github.com/KowkaVaweNorm"
                    copyText="https://github.com/KowkaVaweNorm"
                    ariaLabel="GitHub"
                />
                <ContactLink
                    icon={<FontAwesomeIcon icon={faLinkedinIn} />}
                    href="https://www.linkedin.com/in/mikhail-pripachkin"
                    copyText="https://www.linkedin.com/in/mikhail-pripachkin"
                    ariaLabel="LinkedIn"
                />
                <ContactLink
                    icon={<FontAwesomeIcon icon={faTelegramPlane} />}
                    href="https://t.me/Kowka_VN"
                    copyText="@Kowka_VN"
                    ariaLabel="Telegram"
                />
                <ContactLink
                    icon={<FontAwesomeIcon icon={faEnvelope} />}
                    href="mailto:headoftenly@gmail.com"
                    copyText="headoftenly@gmail.com"
                    ariaLabel="Email"
                    openInNewTab={false}
                />
            </address>
        </div>
    );
};
