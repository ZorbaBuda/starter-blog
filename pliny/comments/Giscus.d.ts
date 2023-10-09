import * as react_jsx_runtime from 'react/jsx-runtime';
import { Mapping, BooleanString, InputPosition } from '@giscus/react';

interface GiscusConfig {
    provider: 'giscus';
    giscusConfig: {
        themeURL?: string;
        theme?: string;
        darkTheme?: string;
        mapping: Mapping;
        repo: string;
        repositoryId: string;
        category: string;
        categoryId: string;
        reactions: BooleanString;
        metadata: BooleanString;
        inputPosition?: InputPosition;
        lang?: string;
    };
}
type GiscusProps = GiscusConfig['giscusConfig'];
declare const Giscus: ({ themeURL, theme, darkTheme, repo, repositoryId, category, categoryId, reactions, metadata, inputPosition, lang, mapping, }: GiscusProps) => react_jsx_runtime.JSX.Element;

export { Giscus, GiscusConfig, GiscusProps };
