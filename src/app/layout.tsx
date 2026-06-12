import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-inter',
});

const jetbrains = JetBrains_Mono({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-mono',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://mikhail-blog.ru'), // замени на свой реальный домен
    title: {
        default: 'Михаил-блог',
        template: '%s | Михаил-блог',
    },
    description:
        'Личный блог Михаила о программировании, разработке и IT. Делюсь опытом, мыслями и полезными находками.',
    keywords: ['программирование', 'разработка', 'блог', 'Михаил', 'IT', 'код', 'web development'],
    authors: [{ name: 'Михаил' }],

    openGraph: {
        type: 'website',
        locale: 'ru-RU',
        title: 'Михаил-блог',
        description: 'Блог Михаила о программировании: от экспериментов до реальных проектов.',
        siteName: 'Михаил-блог',
        images: [
            {
                url: '/assets/og-image.png', // замени на свою картинку для блога
                width: 1200,
                height: 630,
                alt: 'Михаил-блог — программирование и разработка',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Михаил-блог',
        description: 'Блог Михаила о программировании и IT',
        images: ['/assets/og-image.png'],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    icons: {
        icon: [
            { url: '/assets/icons/logo/favicon.svg', type: 'image/svg+xml' },
            { url: '/assets/icons/logo/favicon.ico', sizes: 'any' },
            { url: '/assets/icons/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/assets/icons/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/assets/icons/logo/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        ],
        apple: [
            { url: '/assets/icons/logo/apple-icon-57x57.png', sizes: '57x57' },
            { url: '/assets/icons/logo/apple-icon-60x60.png', sizes: '60x60' },
            { url: '/assets/icons/logo/apple-icon-72x72.png', sizes: '72x72' },
            { url: '/assets/icons/logo/apple-icon-76x76.png', sizes: '76x76' },
            { url: '/assets/icons/logo/apple-icon-114x114.png', sizes: '114x114' },
            { url: '/assets/icons/logo/apple-icon-120x120.png', sizes: '120x120' },
            { url: '/assets/icons/logo/apple-icon-144x144.png', sizes: '144x144' },
            { url: '/assets/icons/logo/apple-icon-152x152.png', sizes: '152x152' },
            { url: '/assets/icons/logo/apple-icon-180x180.png', sizes: '180x180' },
        ],
        other: [
            {
                rel: 'icon',
                url: '/assets/icons/logo/android-icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
        ],
    },
    referrer: 'origin-when-cross-origin',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    manifest: '/assets/site.webmanifest',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
            <body>{children}</body>
        </html>
    );
}
