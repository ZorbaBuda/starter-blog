import * as react_jsx_runtime from 'react/jsx-runtime';
import { GoogleAnalyticsProps } from './GoogleAnalytics.js';
export { GA } from './GoogleAnalytics.js';
import { PlausibleProps } from './Plausible.js';
export { Plausible } from './Plausible.js';
import { SimpleAnalyticsProps } from './SimpleAnalytics.js';
export { SimpleAnalytics } from './SimpleAnalytics.js';
import { UmamiProps } from './Umami.js';
export { Umami } from './Umami.js';
import { PosthogProps } from './Posthog.js';
export { Posthog } from './Posthog.js';

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        plausible?: (...args: any[]) => void;
        sa_event?: (...args: any[]) => void;
    }
}
interface AnalyticsConfig {
    googleAnalytics?: GoogleAnalyticsProps;
    plausibleAnalytics?: PlausibleProps;
    umamiAnalytics?: UmamiProps;
    posthogAnalytics?: PosthogProps;
    simpleAnalytics?: SimpleAnalyticsProps;
}
/**
 * @example
 * const analytics: AnalyticsConfig = {
 *  plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
 *  simpleAnalytics: false, // true or false
 *  umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
 *  posthogProjectApiKey: '', // e.g. AhnJK8392ndPOav87as450xd
 *  googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
 * }
 */
interface AnalyticsProps {
    analyticsConfig: AnalyticsConfig;
}
/**
 * Supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
 * All components default to the hosted service, but can be configured to use a self-hosted
 * or proxied version of the script by providing the `src` / `apiHost` props.
 *
 * Note: If you want to use an analytics provider you have to add it to the
 * content security policy in the `next.config.js` file.
 * @param {AnalyticsProps} { analytics }
 * @return {*}
 */
declare const Analytics: ({ analyticsConfig }: AnalyticsProps) => react_jsx_runtime.JSX.Element;

export { Analytics, AnalyticsConfig, AnalyticsProps, GoogleAnalyticsProps, PlausibleProps, PosthogProps, SimpleAnalyticsProps, UmamiProps };
