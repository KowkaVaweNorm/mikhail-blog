import { faCalendarAlt, faClock, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cls from './HeaderMetaBlock.module.scss';
import { ReactNode } from 'react';

type TProps = {
    date: string;
    readingTime: string;
    tags?: ReactNode | string;
};
export const HeaderMetaBlock = (props: TProps) => {
    const { date, readingTime, tags } = props;
    return (
        <div className={cls.articleMetaTop}>
            <span>
                <FontAwesomeIcon icon={faCalendarAlt} />
                {date}
            </span>
            <span>
                <FontAwesomeIcon icon={faClock} />
                {readingTime}
            </span>
            <span>
                <FontAwesomeIcon icon={faTag} />
                {tags}
            </span>
        </div>
    );
};
