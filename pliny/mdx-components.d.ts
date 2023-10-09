import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { MDXComponents } from 'mdx/types';

declare const useMDXComponent: (code: string, globals?: Record<string, unknown>) => React.ComponentType<any>;
interface MDXLayoutRenderer {
    code: string;
    components?: MDXComponents;
    [key: string]: unknown;
}
declare const MDXLayoutRenderer: ({ code, components, ...rest }: MDXLayoutRenderer) => react_jsx_runtime.JSX.Element;

export { MDXLayoutRenderer, useMDXComponent };
