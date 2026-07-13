export type TArticle = {
    id: string;
    title: string;
    description: string;
    date: string;
    readingTime: string;
    tags: string[];
    image?: string;
    slug: string;
    Component: React.ComponentType;
};
