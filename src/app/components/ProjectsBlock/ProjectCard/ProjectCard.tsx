'use client';

import { useState, useEffect, memo } from 'react';
import cls from './ProjectCard.module.scss';

import { ReactNode } from 'react';
import { ImageSlider } from './ImageSlider/ImageSlider';
import { ProjectDetails } from './ProjectDetails';
import { ProjectModal } from './ProjectModal/ProjectModal';
import { useWidthScreen } from '@/shared/lib/hooks/useWidthScreen';

export interface ProjectCardProps {
    title: string;
    role?: string;
    description: string | ReactNode;
    achievements: string[];
    techStack: string[];
    projectUrl?: string;
    images?: string[];
    imageAlt?: string;
}

export const ProjectCard = memo((props: ProjectCardProps) => {
    const { title, images = [], imageAlt } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);
    

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

    const openModal = (index: number) => {
        setModalImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


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

    return (
        <>
            <div className={cls.projectCard}>
                <div className={cls.imageWrapper}>
                    <ImageSlider images={images} title={title} imageAlt={imageAlt} onImageClick={openModal} />
                </div>
                <ProjectDetails {...props} />
            </div>
            <ProjectModal
                images={images}
                setModalImageIndex={setModalImageIndex}
                closeModal={closeModal}
                isModalOpen={isModalOpen}
                modalImageIndex={modalImageIndex}
                title={title}
                imageAlt={imageAlt}
            />
        </>
    );
});
