import * as react_jsx_runtime from 'react/jsx-runtime';

interface PlausibleProps {
    plausibleDataDomain: string;
    dataApi?: string;
    src?: string;
}
/**
 * Plausible analytics component.
 * To proxy the requests through your own domain, you can use the dataApi and src attribute.
 * See [Plausible docs](https://plausible.io/docs/proxy/guides/nextjs#step-2-adjust-your-deployed-script)
 * for more information.
 *
 */
declare const Plausible: ({ plausibleDataDomain, dataApi, src, }: PlausibleProps) => react_jsx_runtime.JSX.Element;
declare const logEvent: (eventName: any, ...rest: any[]) => void;

export { Plausible, PlausibleProps, logEvent };
