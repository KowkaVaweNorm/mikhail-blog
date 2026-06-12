"use client"
import { useEffect, useState } from 'react';
/*

mobile: 0 - 743px,
tablet: 744 - 1279px,
desktop: 1280 - 1919px,
fullHd: 1920 - 9999999999999px,

*/
const breakpoints = {
    mobile: 743,
    tablet: 1279,
    desktop: 1919,
    fullHd: 9999999999999,
} as const;

export type Screen = keyof typeof breakpoints;
type RangeType = 'up' | 'down' | 'only';
const screenOrder: Screen[] = Object.keys(breakpoints) as Screen[];
export const useWidthScreen = (screen: Screen, rangeType: RangeType = 'only'): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        let media: MediaQueryList;

        if (rangeType === 'up') {
            const index = screenOrder.indexOf(screen);
            // Give prev resolution and plus 1px
            const minWidth = screen === 'mobile' ? 0 : breakpoints[screenOrder[index - 1]] + 1;
            media = window.matchMedia(`(min-width: ${minWidth}px)`);
        } else if (rangeType === 'down') {
            media = window.matchMedia(`(max-width: ${breakpoints[screen]}px)`);
        } else {
            const index = screenOrder.indexOf(screen);
            const min = index === 0 ? 0 : breakpoints[screenOrder[index - 1]] + 1;
            const max = index === 0 ? breakpoints[screenOrder[index]] : (breakpoints[screenOrder[index]] ?? Infinity);

            if (max === Infinity) {
                media = window.matchMedia(`(min-width: ${min}px)`);
            } else {
                media = window.matchMedia(`(min-width: ${min}px) and (max-width: ${max}px)`);
            }
        }

        const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
        media.addEventListener('change', onChange);
        setMatches(media.matches);

        return () => media.removeEventListener('change', onChange);
    }, [screen, rangeType]);

    return matches;
};
