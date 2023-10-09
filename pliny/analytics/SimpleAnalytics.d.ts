import * as react_jsx_runtime from 'react/jsx-runtime';

interface SimpleAnalyticsProps {
    src?: string;
}
declare const SimpleAnalytics: ({ src, }: SimpleAnalyticsProps) => react_jsx_runtime.JSX.Element;
declare const logEvent: (eventName: any, callback: any) => void;

export { SimpleAnalytics, SimpleAnalyticsProps, logEvent };
