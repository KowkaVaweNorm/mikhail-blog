'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cls from './BrowserSupportBlock.module.scss';
import { BrowserSupportIFrame } from '../BrowserSupportIFrame/BrowserSupportIFrame';
import { faAnglesDown, faAnglesUp, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { HStack, VStack } from '@/shared/ui';
import clsx from 'clsx';
import { useState } from 'react';

type TProps = {
    featureName: string;
};

export const BrowserSupportBlock = (props: TProps) => {
    const { featureName } = props;
    const [isCollapsed, setIsCollapsed] = useState(true);
    return (
        <VStack gap="space_1" className={cls.browserCompat}>
            <HStack justify="between" align="center" max>
                <h3>
                    <FontAwesomeIcon icon={faGlobe} />
                    Поддерживаемые браузеры
                </h3>
                <button
                    className={cls.view_toggle}
                    onClick={() => {
                        setIsCollapsed(prev => !prev);
                    }}
                >
                    Показать <FontAwesomeIcon className={isCollapsed ? cls.arrow_down: cls.arrow_up} icon={isCollapsed ? faAnglesDown : faAnglesUp} />
                </button>
            </HStack>

            <BrowserSupportIFrame
                name={featureName}
                className={clsx({
                    [cls.iframe_collapsed]: isCollapsed,
                })}
            />
        </VStack>
    );
};
