'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export const HashScroll = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);

            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [pathname, searchParams]);

    return null;
};
