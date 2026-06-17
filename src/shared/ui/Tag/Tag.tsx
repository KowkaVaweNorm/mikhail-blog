import { PropsWithChildren } from 'react';

import cls from './Tag.module.scss';
import clsx from 'clsx';

type TProps = {
    className?: string;
    size?: 'small' | 'medium';
};

export const Tag = ({ children, className, size }: PropsWithChildren<TProps>) => {
    return (
        <span
            className={clsx(
                cls.tag,
                {
                    [cls.size_small]: size == 'medium',
                },
                className,
            )}
        >
            {children}
        </span>
    );
};
