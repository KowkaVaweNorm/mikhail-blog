'use client';

import { useState } from 'react';

type TProps = {
    name: string;
    width?: string | number;
    height?: string | number;
    className?: string;
};
export const BrowserSupportIFrame = (props: TProps) => {
    const { name, height = '400', width = '100%', className } = props;
    const [isLoading, setIsLoading] = useState(true);
    const preparedName = encodeURIComponent(name);
    console.log(isLoading);
    return (
        <iframe
            src={`https://caniuse.com/?search=${preparedName}`}
            width={width}
            height={height}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            referrerPolicy="no-referrer"
            title="Browser support"
            style={{ border: 'none' }}
            className={className}
            tabIndex={-1}
            onLoad={() => setIsLoading(false)}
        />
    );
};
