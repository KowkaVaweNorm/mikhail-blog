// import config from '~/next.config';
import AudioOutputDevice from './AudioOutputDevice';
import { TArticle } from '@/entities/Article';

// const basePath = config.basePath;

export const audioOutputDeviceMeta: TArticle = {
    id: 'localstorage-api-guide',
    title: 'LocalStorage API: полное руководство',
    description:
        'Полное руководство по работе с LocalStorage API в браузере: методы, ограничения, события и практические сценарии использования',
    date: '18 июня 2025',
    readingTime: '12 мин чтения',
    tags: ['#localStorage', '#WebAPI', '#JavaScript', '#browser'],
    // image: `${basePath}/images/localstorage-guide.jpg`,
    slug: 'localstorage-api-guide',
    Component: AudioOutputDevice
};
