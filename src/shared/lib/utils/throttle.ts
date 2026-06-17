
export const throttle = (func: (...args: any[]) => void, limitMs: number) => {
    let inThrottle: boolean;
    return function (this: any, ...args: any[]) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limitMs);
        }
    };
};
