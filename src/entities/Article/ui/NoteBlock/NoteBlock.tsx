import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import cls from './NoteBlock.module.scss';
import clsx from 'clsx';

type NoteBlockProps = {
    type: 'warn' | 'note';
    children: React.ReactNode;
};

export const NoteBlock = ({ children, type }: NoteBlockProps) => {
    return (
        <div className={clsx(cls.note_block, cls[type])}>
            <FontAwesomeIcon icon={faLightbulb} className={cls.note_icon} />
            <div className={cls.note_content}>{children}</div>
        </div>
    );
};
