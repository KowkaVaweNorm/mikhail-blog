'use client';

import { ReactNode, memo, useEffect, useState } from 'react';
import cls from './ProjectCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExternalLinkAlt, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useWidthScreen } from '@/shared/lib/hooks/useWidthScreen';
import { Tag } from '@/shared/ui';

interface ProjectDetailsProps {
    title: string;
    role?: string;
    description: string | ReactNode;
    achievements: string[];
    techStack: string[];
    projectUrl?: string;
}

export const ProjectDetails = memo(
    ({ title, role, description, achievements, techStack, projectUrl }: ProjectDetailsProps) => {
        const isTabletOrMore = useWidthScreen('tablet', 'up');
        const [isExpanded, setIsExpanded] = useState(false);
        useEffect(() => {
            setIsExpanded(isTabletOrMore);
        }, [isTabletOrMore]);

        const onToggleExpand = () => {
            setIsExpanded(prev => !prev);
        };
        return (
            <div className={cls.projectContent}>
                <div className={cls.projectHeader}>
                    <div>
                        <h3 className={cls.projectTitle}>{title}</h3>
                        {role && <span className={cls.projectRole}>{role}</span>}
                    </div>
                    {projectUrl && (
                        <a
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cls.projectLink}
                            aria-label="Перейти на сайт проекта"
                        >
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                    )}
                </div>
                <div className={cls.projectDescription}>
                    {typeof description === 'string' ? <p>{description}</p> : description}
                </div>

                <div className={`${cls.expandableContent} ${isExpanded ? cls.expanded : ''}`}>
                    <ul className={cls.featureList}>
                        {achievements.map((achievement, index) => (
                            <li key={index}>
                                <FontAwesomeIcon icon={faCheck} />
                                {achievement}
                            </li>
                        ))}
                    </ul>
                    <div className={cls.projectTech}>
                        {techStack.map((tech, index) => (
                            <Tag key={index}>{tech}</Tag>
                        ))}
                    </div>
                </div>

                <button className={cls.expandBtn} onClick={onToggleExpand} aria-label="Подробнее">
                    <span>{isExpanded ? 'Свернуть' : 'Подробнее'}</span>
                    <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
                </button>
            </div>
        );
    },
);
