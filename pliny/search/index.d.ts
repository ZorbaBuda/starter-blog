import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';
import { AlgoliaConfig } from './Algolia.js';
import { KBarConfig } from './KBar.js';
import '@docsearch/react';
import 'kbar';

type SearchConfig = AlgoliaConfig | KBarConfig;
interface SearchConfigProps {
    searchConfig: SearchConfig;
    children: React.ReactNode;
}
/**
 * Command palette like search component - `ctrl-k` to open the palette.
 * Or use the search context to bind toggle to an onOpen event.
 * Currently supports Algolia or Kbar (local search).
 *
 * To toggle the modal or search from child components, use the search context:
 *
 * For Algolia:
 * ```
 * import { AlgoliaSearchContext } from 'pliny/search/algolia'
 * const { query } = useContext(AlgoliaSearchContext)
 * ```
 *
 * For Kbar:
 * ```
 * import { useKBar } from 'kbar'
 * const { query } = useKBar()
 * ```
 *
 * @param {SearchConfig} searchConfig
 * @return {*}
 */
declare const SearchProvider: ({ searchConfig, children }: SearchConfigProps) => react_jsx_runtime.JSX.Element;

export { SearchConfig, SearchConfigProps, SearchProvider };
