import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
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
const withMDX = createMDX({
    // Add markdown plugins here, as desired
});
 
export default withMDX(nextConfig);