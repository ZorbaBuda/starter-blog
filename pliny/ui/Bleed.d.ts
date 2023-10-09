import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface BleedProps {
    full?: boolean;
    children: ReactNode;
}
declare const Bleed: ({ full, children }: BleedProps) => react_jsx_runtime.JSX.Element;

export { BleedProps, Bleed as default };
