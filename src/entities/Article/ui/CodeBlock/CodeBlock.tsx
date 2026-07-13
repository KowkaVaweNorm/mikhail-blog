import cls from './CodeBlock.module.scss';

type CodeBlockProps = {
    language: string;
    code: string;
};

export const CodeBlock = ({ language, code }: CodeBlockProps)=>  {
    return (
        <div className={cls.code_block}>
            <span className={cls.code_lang}>{language}</span>
            <pre className={cls.code_content}>
                <code>{code}</code>
            </pre>
        </div>
    );
}
