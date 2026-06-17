import cls from './page.module.scss';

export default function BlogPage() {
    return (
        <div className={cls.page}>
            <div className={cls.container}>
                <div className={cls.blogHeader}>
                    <h1 className={cls.blogTitle}>Мысли & инсайты</h1>
                    <p className={cls.blogSub}>Заметки о разработке, архитектуре и современном вебе.</p>
                </div>

                <div className={cls.comingSoon}>
                    <div className={cls.comingSoonContent}>
                        <h2 className={cls.comingSoonTitle}>Скоро здесь появятся статьи</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
