'use client';

import { createPortal } from 'react-dom';
import { useEffect, useCallback, useState, useRef } from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOverlayClick?: () => void;
    children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, onOverlayClick, children }: ModalProps) => {
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        setMounted(true);
        containerRef.current = document.getElementById('modal-container') ?? document.body;
    }, []);

    const handleOverlayClick = useCallback(
        (e: React.MouseEvent) => {
            if (e.target === e.currentTarget) {
                onOverlayClick?.();
            }
        },
        [onOverlayClick],
    );

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !mounted || !containerRef.current) return null;

    return createPortal(
        <div className={cls.modalOverlay} onClick={handleOverlayClick}>
            <div className={cls.modalContent}>{children}</div>
        </div>,
        containerRef.current,
    );
};
