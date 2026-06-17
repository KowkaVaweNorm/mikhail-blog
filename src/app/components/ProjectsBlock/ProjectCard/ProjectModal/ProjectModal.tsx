import { Modal } from '@/shared/ui/Modal/Modal';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction } from 'react';

import cls from './ProjectModal.module.scss';

type TProps = {
    title: string;
    images: string[];
    modalImageIndex: number;
    setModalImageIndex: Dispatch<SetStateAction<number>>;
    imageAlt?: string;
    isModalOpen: boolean;
    closeModal: () => void;
};

export const ProjectModal = (props: TProps) => {
    const { images, title, setModalImageIndex, imageAlt, closeModal, isModalOpen, modalImageIndex } = props;
    const hasMultipleImages = images.length > 1;

   
    const prevModalImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (hasMultipleImages) {
            setModalImageIndex(prev => (prev - 1 + images.length) % images.length);
        }
    };
    const nextModalImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (hasMultipleImages) {
            setModalImageIndex(prev => (prev + 1) % images.length);
        }
    };
    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className={cls.modalImageWrapper}>
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
        </Modal>
    );
};
