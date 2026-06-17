import cls from './Layout.module.scss';

export default function Layout({ children }: React.PropsWithChildren) {
    return <div className={cls.layout_page}>{children}</div>;
}
