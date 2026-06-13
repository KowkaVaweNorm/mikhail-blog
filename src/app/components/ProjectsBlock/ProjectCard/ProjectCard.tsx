'use client';

import { useState, useEffect, useCallback } from 'react';
import cls from './ProjectCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRocket,
    faCheck,
    faChevronLeft,
    faChevronRight,
    faExternalLinkAlt,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';

export interface ProjectCardProps {
    /** Название проекта */
    title: string;
    /** Роль / позиция */
    role?: string;
    /** Описание проекта */
    description: string | ReactNode;
    /** Список достижений */
    achievements: string[];
    /** Технологии стека */
    techStack: string[];
    /** Ссылка на проект (опционально) */
    projectUrl?: string;
    /** Массив изображений для слайдера */
    images?: string[];
    /** Alt для изображений */
    imageAlt?: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
    const { title, role, description, achievements, techStack, projectUrl, images = [], imageAlt } = props;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);

    const hasImages = images.length > 0;
    const hasMultipleImages = images.length > 1;

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

    const nextImage = useCallback(() => {
        if (hasMultipleImages) {
            setCurrentImageIndex(prev => (prev + 1) % images.length);
        }
    }, [hasMultipleImages, images.length]);

    const prevImage = useCallback(() => {
        if (hasMultipleImages) {
            setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
        }
    }, [hasMultipleImages, images.length]);

    const openModal = (index: number) => {
        setModalImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextModalImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (hasMultipleImages) {
            setModalImageIndex(prev => (prev + 1) % images.length);
        }
    };

    const prevModalImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (hasMultipleImages) {
            setModalImageIndex(prev => (prev - 1 + images.length) % images.length);
        }
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    // Обработка клавиш Escape и стрелок
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isModalOpen) return;
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft' && hasMultipleImages) {
                setModalImageIndex(prev => (prev - 1 + images.length) % images.length);
            } else if (e.key === 'ArrowRight' && hasMultipleImages) {
                setModalImageIndex(prev => (prev + 1) % images.length);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen, hasMultipleImages, images.length]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.innerWidth > 900) {
            const card = document.querySelector(`.${cls.projectCard}`);
            const imageWrapper = card?.querySelector(`.${cls.imageWrapper}`);
            const content = card?.querySelector(`.${cls.projectContent}`);

            if (imageWrapper && content) {
                const contentHeight = content.clientHeight;
                (imageWrapper as HTMLElement).style.height = `${contentHeight}px`;
            }
        }
    }, [description, achievements, techStack]);
    return (
        <>
            <div className={cls.projectCard}>
                <div className={cls.imageWrapper}>
                    {hasImages ? (
                        <div className={cls.sliderContainer}>
                            <img
                                src={images[currentImageIndex]}
                                alt={imageAlt || `${title} - ${currentImageIndex + 1}`}
                                className={cls.projectImage}
                                onClick={() => openModal(currentImageIndex)}
                                style={{ cursor: 'pointer' }}
                            />
                            {hasMultipleImages && (
                                <>
                                    <button
                                        className={`${cls.sliderBtn} ${cls.sliderBtnPrev}`}
                                        onClick={prevImage}
                                        aria-label="Предыдущее изображение"
                                    >
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>
                                    <button
                                        className={`${cls.sliderBtn} ${cls.sliderBtnNext}`}
                                        onClick={nextImage}
                                        aria-label="Следующее изображение"
                                    >
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button>
                                    <div className={cls.sliderDots}>
                                        {images.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`${cls.dot} ${index === currentImageIndex ? cls.dotActive : ''}`}
                                                onClick={() => setCurrentImageIndex(index)}
                                                aria-label={`Перейти к изображению ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    ) : (
                        <div className={cls.imgPlaceholder}>
                            <FontAwesomeIcon icon={faRocket} />
                            <span>{title}</span>
                        </div>
                    )}
                </div>
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
                        <ul className={cls.featureList}>
                            {achievements.map((achievement, index) => (
                                <li key={index}>
                                    <FontAwesomeIcon icon={faCheck} />
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cls.projectTech}>
                        {techStack.map((tech, index) => (
                            <span key={index}>{tech}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Модальное окно */}
            {isModalOpen && hasImages && (
                <div className={cls.modalOverlay} onClick={handleOverlayClick}>
                    <div className={cls.modalContent}>
                        <button className={cls.modalClose} onClick={closeModal} aria-label="Закрыть">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <img
                            src={images[modalImageIndex]}
                            alt={imageAlt || `${title} - ${modalImageIndex + 1}`}
                            className={cls.modalImage}
                        />
                        {hasMultipleImages && (
                            <>
                                <button
                                    className={`${cls.modalBtn} ${cls.modalBtnPrev}`}
                                    onClick={prevModalImage}
                                    aria-label="Предыдущее изображение"
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                <button
                                    className={`${cls.modalBtn} ${cls.modalBtnNext}`}
                                    onClick={nextModalImage}
                                    aria-label="Следующее изображение"
                                >
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                                <div className={cls.modalCounter}>
                                    {modalImageIndex + 1} / {images.length}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};
