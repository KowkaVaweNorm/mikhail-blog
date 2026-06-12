import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        optimizeCss: true,
    },
    output: 'export',
    allowedDevOrigins: ['192.168.3.7'],
    assetPrefix: process.env.NODE_ENV === 'development' ? '' : undefined,
    rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3002/api/:path*',
            },
        ];
    },
};

export default nextConfig;
