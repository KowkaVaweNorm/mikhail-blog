'use client';

import { useState, useCallback, memo } from 'react';
import cls from './ImageSlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faRocket } from '@fortawesome/free-solid-svg-icons';

interface ImageSliderProps {
    images: string[];
    title: string;
    imageAlt?: string;
    onImageClick: (index: number) => void;
}

export const ImageSlider = memo(({ images, title, imageAlt, onImageClick }: ImageSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasImages = images.length > 0;
    const hasMultipleImages = images.length > 1;

    const nextImage = useCallback(() => {
        if (hasMultipleImages) {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }
    }, [hasMultipleImages, images.length]);

    const prevImage = useCallback(() => {
        if (hasMultipleImages) {
            setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
        }
    }, [hasMultipleImages, images.length]);

    if (!hasImages) {
        return (
            <div className={cls.imgPlaceholder}>
                <FontAwesomeIcon icon={faRocket} />
                <span>{title}</span>
            </div>
        );
    }

    return (
        <div className={cls.sliderContainer}>
            <img
                src={images[currentIndex]}
                alt={imageAlt || `${title} - ${currentIndex + 1}`}
                className={cls.projectImage}
                onClick={() => onImageClick(currentIndex)}
                loading="lazy"
                decoding="async"
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
                                className={`${cls.dot} ${index === currentIndex ? cls.dotActive : ''}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Перейти к изображению ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
});
