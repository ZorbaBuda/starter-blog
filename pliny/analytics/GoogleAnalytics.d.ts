import * as react_jsx_runtime from 'react/jsx-runtime';

interface GoogleAnalyticsProps {
    googleAnalyticsId: string;
}
declare const GA: ({ googleAnalyticsId }: GoogleAnalyticsProps) => react_jsx_runtime.JSX.Element;
declare const logEvent: (action: any, category: any, label: any, value: any) => void;

export { GA, GoogleAnalyticsProps, logEvent };
