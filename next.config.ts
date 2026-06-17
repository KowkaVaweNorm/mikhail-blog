import type { NextConfig } from 'next';
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    experimental: {
        optimizeCss: true,
    },
    output: 'export',
    basePath: isProd ? '/mikhail-blog' : '',
    allowedDevOrigins: ['192.168.3.7'],
    assetPrefix: isDev ? '' : undefined,
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
