// import { FC } from 'react';
// import styles from './BrowserSupportGrid.module.scss';
// import { BrowserItemData } from '../../model/browser';
// import { BrowserSupportItem } from '../BrowserSupportItem/BrowserSupportItem';

// interface BrowserGridProps {
//     browsers: BrowserItemData[];
//     className?: string;
// }

// export const BrowserSupportGrid: FC<BrowserGridProps> = ({ browsers, className }) => {
//     return (
//         <div className={`${styles.browserGrid} ${className || ''}`}>
//             {browsers.map((browser, index) => (
//                 <BrowserSupportItem key={`${browser.name}-${index}`} data={browser} />
//             ))}
//         </div>
//     );
// };
