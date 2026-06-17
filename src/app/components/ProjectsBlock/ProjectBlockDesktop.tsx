'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { PROJECTS_DATA } from './project-data';
import { throttle } from '@/shared/lib/utils/throttle';
import cls from './ProjectsBlock.module.scss';

const ProjectsBlockDesktop = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalProjects, setTotalProjects] = useState(0);
    const isScrollingRef = useRef(false);
    const projectCardsRef = useRef<HTMLElement[]>([]);
    const maxScrollRef = useRef<number>(0);

    // Только инициализация
    useEffect(() => {
        if (scrollContainerRef.current) {
            const cards = scrollContainerRef.current.querySelectorAll(`.${cls.projectCardWrapper}`);
            setTotalProjects(cards.length);
            projectCardsRef.current = Array.from(cards) as HTMLElement[];
            maxScrollRef.current = calculateMaxScroll();

            // Центрируем первую карточку
            setTimeout(() => {
                if (scrollContainerRef.current && projectCardsRef.current[0]) {
                    const container = scrollContainerRef.current;
                    const firstCard = projectCardsRef.current[0];
                    const containerRect = container.getBoundingClientRect();
                    const cardRect = firstCard.getBoundingClientRect();
                    let scrollLeft =
                        container.scrollLeft +
                        (cardRect.left - containerRect.left) -
                        containerRect.width / 2 +
                        cardRect.width / 2;

                    scrollLeft = Math.max(0, Math.min(scrollLeft, maxScrollRef.current));
                    container.scrollLeft = scrollLeft;
                }
            }, 100);
        }
    }, []);

    const calculateMaxScroll = useCallback(() => {
        const container = scrollContainerRef.current;
        const cards = projectCardsRef.current;
        if (!container || cards.length === 0) return 0;

        const lastCard = cards[cards.length - 1];
        const containerRect = container.getBoundingClientRect();
        const lastCardRect = lastCard.getBoundingClientRect();

        const maxScroll =
            container.scrollLeft +
            (lastCardRect.left - containerRect.left) -
            containerRect.width / 2 +
            lastCardRect.width / 2;

        return Math.max(0, maxScroll);
    }, []);

    // Обновляем maxScroll при ресайзе
    useEffect(() => {
        const updateMaxScroll = () => {
            maxScrollRef.current = calculateMaxScroll();
        };

        updateMaxScroll();
        window.addEventListener('resize', updateMaxScroll);

        return () => window.removeEventListener('resize', updateMaxScroll);
    }, [calculateMaxScroll]);

    const updateCurrentIndexFromScroll = useCallback(() => {
        const container = scrollContainerRef.current;
        const cards = projectCardsRef.current;

        if (!container || cards.length === 0) return;

        const containerRect = container.getBoundingClientRect();
        const centerX = containerRect.left + containerRect.width / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, idx) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distance = Math.abs(centerX - cardCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = idx;
            }
        });

        const currentScroll = container.scrollLeft;
        const maxScroll = maxScrollRef.current;

        if (currentScroll >= maxScroll - 1) {
            const lastIndex = cards.length - 1;
            if (closestIndex !== lastIndex) {
                const lastCardRect = cards[lastIndex].getBoundingClientRect();
                const lastCardCenter = lastCardRect.left + lastCardRect.width / 2;
                const lastDistance = Math.abs(centerX - lastCardCenter);

                if (lastDistance < closestDistance) {
                    closestIndex = lastIndex;
                }
            }
        }

        if (closestIndex !== currentIndex) {
            setCurrentIndex(closestIndex);
        }
    }, [currentIndex]);

    // Слушаем скролл только на десктопе
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = throttle(() => {
            updateCurrentIndexFromScroll();
        }, 100);

        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [updateCurrentIndexFromScroll]);

    const scrollToProject = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
        const container = scrollContainerRef.current;
        const cards = projectCardsRef.current;

        if (!container || cards.length === 0 || index < 0 || index >= cards.length) return;

        const card = cards[index];
        const containerRect = container.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();

        let scrollLeft =
            container.scrollLeft + (cardRect.left - containerRect.left) - containerRect.width / 2 + cardRect.width / 2;

        scrollLeft = Math.max(0, Math.min(scrollLeft, maxScrollRef.current));

        container.scrollTo({
            left: scrollLeft,
            behavior,
        });

        setCurrentIndex(index);
    }, []);

    const scrollPrev = () => {
        if (currentIndex > 0 && !isScrollingRef.current) {
            isScrollingRef.current = true;
            scrollToProject(currentIndex - 1);
            setTimeout(() => {
                isScrollingRef.current = false;
            }, 500);
        }
    };

    const scrollNext = () => {
        if (currentIndex < totalProjects - 1 && !isScrollingRef.current) {
            isScrollingRef.current = true;
            scrollToProject(currentIndex + 1);
            setTimeout(() => {
                isScrollingRef.current = false;
            }, 500);
        }
    };

    return (
        <>
            <div className={cls.sectionHeader}>
                {totalProjects > 1 && (
                    <div className={cls.sliderButtons}>
                        <button
                            className={`${cls.sliderBtn} ${currentIndex === 0 ? cls.disabled : ''}`}
                            onClick={scrollPrev}
                            disabled={currentIndex === 0}
                            aria-label="Предыдущий проект"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button
                            className={`${cls.sliderBtn} ${currentIndex === totalProjects - 1 ? cls.disabled : ''}`}
                            onClick={scrollNext}
                            disabled={currentIndex === totalProjects - 1}
                            aria-label="Следующий проект"
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                )}
            </div>

            <div className={cls.projectsSlider} ref={scrollContainerRef}>
                <div className={cls.projectsGrid}>
                    {PROJECTS_DATA.map(project => (
                        <div key={project.title} className={cls.projectCardWrapper}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default ProjectsBlockDesktop;
