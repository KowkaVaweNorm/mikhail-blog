import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './BrowserSupportItem.module.scss';
import { BROWSER_CONFIG, BrowserItemData } from '../../model/browser';

interface BrowserItemProps {
    data: BrowserItemData;
}

const getSupportLabel = (support: BrowserItemData['support']): string => {
    switch (support.type) {
        case 'supported':
            return `${support.minVersion}+`;
        case 'unsupported':
            return '✗';
        case 'unknown':
            return '?';
    }
};

const getSupportClass = (support: BrowserItemData['support']): string => {
    switch (support.type) {
        case 'supported':
            return styles.supported;
        case 'unsupported':
            return styles.unsupported;
        case 'unknown':
            return styles.unknown;
    }
};

export const BrowserSupportItem: FC<BrowserItemProps> = ({ data }) => {
    const config = BROWSER_CONFIG[data.name];

    return (
        <div className={styles.browserItem}>
            <span className={styles.browserIcon}>
                <FontAwesomeIcon icon={config.icon} />
            </span>
            <span>{config.label}</span>
            <span className={`${styles.browserVersion} ${getSupportClass(data.support)}`}>
                {getSupportLabel(data.support)}
            </span>
        </div>
    );
};
