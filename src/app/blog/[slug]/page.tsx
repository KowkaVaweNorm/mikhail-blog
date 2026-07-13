import { articles } from '../_articles';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return articles.map(a => ({ slug: a.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articles.find(a => a.slug === slug);

    if (!article) notFound();

    const ArticleComponent = article.Component;
    return <ArticleComponent />;
}
