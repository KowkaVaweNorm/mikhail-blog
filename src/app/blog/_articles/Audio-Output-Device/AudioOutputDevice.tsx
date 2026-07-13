import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faChartBar, faCode, faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import cls from './AudioOutputDevice.module.scss';
import { audioOutputDeviceMeta } from './meta';
import Link from 'next/link';
import { BrowserSupportBlock, CodeBlock, HeaderMetaBlock, NoteBlock } from '@/entities/Article';
import { Tag } from '@/shared/ui';

export default function AudioOutputDevice() {
    return (
        <div className={cls.articleWrapper}>
            <Link href="/blog" className={cls.backLink}>
                <FontAwesomeIcon size="xl" icon={faArrowLeft} />
                Назад к списку
            </Link>

            <div className={cls.articleHeader}>
                <Tag nohover className={cls.tag}>
                    API
                </Tag>
                <h1>{audioOutputDeviceMeta.title}</h1>
                <HeaderMetaBlock
                    date={audioOutputDeviceMeta.date}
                    readingTime={audioOutputDeviceMeta.readingTime}
                    tags={audioOutputDeviceMeta.tags.join(' ')}
                />
            </div>

            <div className={cls.articleImageMock}>
                <FontAwesomeIcon icon={faDatabase} />
                <span>иллюстрация: LocalStorage в браузере</span>
            </div>

            <div className={cls.articleBody}>
                <p>
                    <strong>LocalStorage</strong> — это механизм веб-хранилища, который позволяет сохранять пары
                    ключ-значение в браузере с персистентностью до явного удаления. В отличие от{' '}
                    <strong>sessionStorage</strong>, данные не очищаются после закрытия вкладки.
                </p>
                <h2>Основы работы с LocalStorage</h2>
                <p>
                    Интерфейс <code>localStorage</code> доступен глобально и предоставляет пять основных методов. Все
                    ключи и значения хранятся в виде строк, поэтому для объектов нужно использовать{' '}
                    <code>JSON.stringify()</code> и <code>JSON.parse()</code>.
                </p>
                <CodeBlock
                    code={`// запись данных
localStorage.setItem('theme', 'dark');
localStorage.setItem('user', JSON.stringify({ name: 'Артём', role: 'dev' }));

// чтение
const theme = localStorage.getItem('theme'); // 'dark'
const user = JSON.parse(localStorage.getItem('user')); // { name: 'Артём', role: 'dev' }

// удаление
localStorage.removeItem('theme');
localStorage.clear(); // очистить всё`}
                    language="JavaScript"
                />
                <NoteBlock type='note'>
                    <strong>Note:</strong> Все операции с localStorage синхронны и блокируют основной поток. Для больших
                    объёмов данных (более 5–10 МБ) рекомендуется использовать IndexedDB.
                </NoteBlock>
                <h2>Ограничения и лимиты</h2>
                <p>
                    Большинство браузеров выделяют <strong>5–10 МБ</strong> на один источник (origin). При превышении
                    лимита браузер выбрасывает исключение <code>QuotaExceededError</code>. Также важно помнить, что
                    данные хранятся в незашифрованном виде, поэтому не стоит сохранять пароли или токены.
                </p>
                <NoteBlock type='warn'>
                    <strong>Warning:</strong> LocalStorage не защищён от XSS-атак. Любой инжектированный скрипт может
                    прочитать данные. Используйте <code>httpOnly</code> куки для чувствительной информации.
                </NoteBlock>
                <div className={cls.articleImageMock} style={{ height: '220px' }}>
                    <FontAwesomeIcon icon={faChartBar} />
                    <span>диаграмма: размер хранилища в разных браузерах</span>
                </div>
                <h3>Событие storage</h3>
                <p>
                    При изменении данных в localStorage (на других вкладках того же источника) срабатывает событие{' '}
                    <code>storage</code>. Это удобно для синхронизации состояния между вкладками.
                </p>
                <CodeBlock
                    code={`window.addEventListener('storage', (e) => {
  console.log(\`Ключ \${e.key} изменён с \${e.oldValue} на \${e.newValue}\`);
});`}
                    language="JavaScript"
                />

                <BrowserSupportBlock featureName="Audio Output Devices API" />
                <h2>Практические сценарии</h2>
                <p>LocalStorage идеально подходит для:</p>
                <ul>
                    <li>
                        <strong>хранения пользовательских настроек</strong> (тема, язык, layout);
                    </li>
                    <li>
                        <strong>кэширования небольших данных</strong> (например, ответов API, которые редко меняются);
                    </li>
                    <li>
                        <strong>сохранения состояния формы</strong> при случайной перезагрузке.
                    </li>
                </ul>
                <div className={cls.noteBox}>
                    <FontAwesomeIcon icon={faCode} />
                    <strong>Tip:</strong> Для удобной работы с localStorage в React/Next.js используйте хуки-обёртки,
                    например, <code>useLocalStorage</code> из библиотеки <strong>usehooks-ts</strong>.
                </div>
                <p>
                    Не забывайте, что localStorage не подходит для хранения больших объёмов бинарных данных или сложных
                    структур. Для таких задач используйте <strong>IndexedDB</strong> или <strong>Cache API</strong>.
                </p>
            </div>

            <div className={cls.articleFooter}>
                <div className={cls.tagsList}>
                    {audioOutputDeviceMeta.tags.map(tag => (
                        <Tag key={tag} nohover>
                            {tag}
                        </Tag>
                    ))}
                </div>
                <span>
                    <FontAwesomeIcon icon={faUser} />
                    Михаил · N {audioOutputDeviceMeta.date}
                </span>
            </div>
        </div>
    );
}
