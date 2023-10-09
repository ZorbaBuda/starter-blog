import * as react_jsx_runtime from 'react/jsx-runtime';

interface PosthogProps {
    posthogProjectApiKey: string;
    apiHost?: string;
}
/**
 * Posthog analytics component.
 * See [Posthog docs](https://posthog.com/docs/libraries/js#option-1-add-javascript-snippet-to-your-html-badgerecommendedbadge) for more information.
 *
 */
declare const Posthog: ({ posthogProjectApiKey, apiHost, }: PosthogProps) => react_jsx_runtime.JSX.Element;

export { Posthog, PosthogProps };
