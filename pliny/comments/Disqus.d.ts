import * as react_jsx_runtime from 'react/jsx-runtime';

interface DisqusConfig {
    provider: 'disqus';
    disqusConfig: {
        shortname: string;
    };
}
type DisqusProps = DisqusConfig['disqusConfig'] & {
    slug?: string;
};
declare const Disqus: ({ shortname, slug }: DisqusProps) => react_jsx_runtime.JSX.Element;

export { Disqus, DisqusConfig, DisqusProps };
