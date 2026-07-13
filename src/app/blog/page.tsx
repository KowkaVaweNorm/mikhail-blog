import Link from 'next/link';
import { articles } from './_articles';
import cls from './page.module.scss';
import { Tag } from '@/shared/ui';

export default function BlogPage() {
    return (
        <div className={cls.page}>
            <div className={cls.container}>
                <div className={cls.blog_header}>
                    <h1 className={cls.blog_title}>Мысли & инсайты</h1>
                    <p className={cls.blog_sub}>
                        Заметки о разработке, архитектуре и современном вебе. Делюсь опытом и наблюдениями.
                    </p>
                </div>

                <div className={cls.articles_grid}>
                    {articles.map(article => (
                        <Link key={article.slug} href={`/blog/${article.slug}`} className={cls.article_card}>
                            <div className={cls.article_image}>
                                {article.image ? (
                                    <img src={article.image} alt={article.title} loading="lazy" />
                                ) : (
                                    <div className={cls.article_image_placeholder}>
                                        <span className={cls.article_image_placeholder_text}>{article.title}</span>
                                    </div>
                                )}
                            </div>
                            <div className={cls.article_content}>
                                <div className={cls.article_tags}>
                                    {article.tags.map(tag => (
                                        <Tag key={tag} nohover>
                                            {tag}
                                        </Tag>
                                    ))}
                                </div>
                                <h2 className={cls.article_title}>{article.title}</h2>
                                <p className={cls.article_excerpt}>{article.description}</p>
                                <div className={cls.article_meta}>
                                    <span className={cls.article_date}>{article.date}</span>
                                    <span className={cls.article_reading_time}>{article.readingTime}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={cls.pagination}>
                    <span className={`${cls.page_link} ${cls.page_link_active}`}>1</span>
                    <span className={cls.page_link}>2</span>
                    <span className={cls.page_link}>3</span>
                    <span className={cls.page_link}>→</span>
                </div>

               
            </div>
        </div>
    );
}
