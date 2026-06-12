'use client';

import cls from './ContactLink.module.scss';
import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

export interface ContactLinkProps {
    /** Иконка (ReactNode, например <FontAwesomeIcon icon={faGithub} />) */
    icon: ReactNode;
    /** URL для перехода по клику на иконку */
    href: string;
    /** Текст для отображения и копирования */
    copyText: string;
    /** Альтернативный текст для ссылки (aria-label) */
    ariaLabel?: string;
    /** Открывать ссылку в новой вкладке? (по умолчанию true) */
    openInNewTab?: boolean;
}

export const ContactLink = (props: ContactLinkProps) => {
    const { icon, href, copyText, ariaLabel, openInNewTab = true } = props;

    const handleCopy = async () => {
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(copyText);
            } else {
                // Fallback для HTTP/старых браузеров
                const textarea = document.createElement('textarea');
                textarea.value = copyText;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }
            console.log('Скопировано:', copyText);
        } catch (err) {
            console.error('Ошибка копирования:', err);
        }
    };

    const linkTarget = openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <div className={cls.contactRow}>
            <a href={href} className={cls.iconLink} aria-label={ariaLabel || copyText} {...linkTarget}>
                {icon}
            </a>
            <div className={cls.copyTextBlock}>
                <span className={cls.copyText}>{copyText}</span>
                <button type="button" className={cls.copyButton} onClick={handleCopy} aria-label="Копировать">
                    <FontAwesomeIcon icon={faCopy} />
                </button>
            </div>
        </div>
    );
};
