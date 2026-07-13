import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChrome, faFirefox, faSafari, faEdge, faOpera } from '@fortawesome/free-brands-svg-icons';

export type BrowserName = 'chrome' | 'firefox' | 'safari' | 'edge' | 'opera';

export const BROWSER_CONFIG: Record<BrowserName, { icon: IconDefinition; label: string }> = {
    chrome: { icon: faChrome, label: 'Chrome' },
    firefox: { icon: faFirefox, label: 'Firefox' },
    safari: { icon: faSafari, label: 'Safari' },
    edge: { icon: faEdge, label: 'Edge' },
    opera: { icon: faOpera, label: 'Opera' },
};

export type BrowserSupport = { type: 'supported'; minVersion: string } | { type: 'unsupported' } | { type: 'unknown' };

export interface BrowserItemData {
    name: BrowserName;
    support: BrowserSupport;
}
