'use client';

import { useState, useEffect } from 'react';
import cls from './Header.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Header = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 720);
            if (window.innerWidth > 720) {
                setIsMenuOpen(false);
            }
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === path;
        }
        return pathname.startsWith(path);
    };

    return (
        <header className={cls.header}>
            <div className={cls.navbar}>
                <div className={cls.logo}>
                    <Link href="/" onClick={closeMenu}>
                        Михаил · N
                    </Link>
                </div>

                {isMobile && (
                    <button
                        className={`${cls.burger} ${isMenuOpen ? cls.burgerOpen : ''}`}
                        onClick={toggleMenu}
                        aria-label="Меню"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                )}

                <div className={`${cls.navLinks} ${isMobile && !isMenuOpen ? cls.hidden : ''}`}>
                    <Link href="/portfolio" className={isActive('/') ? cls.active : ''} onClick={closeMenu}>
                        Портфолио
                    </Link>

                    <Link
                        href="/#contacts_block"
                        className={isActive('/') && pathname.includes('contacts') ? cls.active : ''}
                        onClick={closeMenu}
                    >
                        Контакты
                    </Link>
                </div>
            </div>
        </header>
    );
};
