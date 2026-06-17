'use client';

import cls from './ProjectsBlock.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { PROJECTS_DATA } from './project-data';

const ProjectsBlockMobile = () => {
    return (
        <>
            <div className={cls.projectsSlider}>
                <div className={cls.projectsGrid}>
                    {PROJECTS_DATA.map(project => (
                        <div key={project.title} className={cls.projectCardWrapper}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>

            {PROJECTS_DATA.length > 1 && (
                <div className={cls.swipeIndicator}>
                    <div className={cls.swipeIcon}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <span>свайп</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
            )}
        </>
    );
};
export default ProjectsBlockMobile;