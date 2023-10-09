import React from 'react';
import { DocSearchProps } from '@docsearch/react';

type AlgoliaSearchProps = {
    algoliaConfig: DocSearchProps;
};
interface AlgoliaConfig {
    provider: 'algolia';
    algoliaConfig: DocSearchProps;
}
interface AlgoliaSearchQuery {
    setSearch: (search: string) => void;
    toggle: () => void;
}
interface AlgoliaSearchContext {
    query: AlgoliaSearchQuery;
}
declare const AlgoliaSearchContext: React.Context<AlgoliaSearchContext>;
/**
 * Command palette like search component for algolia - `ctrl-k` to open the palette.
 * To toggle the modal or search from child components, use the search context:
 * ```
 * import { AlgoliaSearchContext } from 'pliny/search/algolia'
 * const { query } = useContext(AlgoliaSearchContext)
 * ```
 *
 */
declare const AlgoliaSearchProvider: React.FC<React.PropsWithChildren<AlgoliaSearchProps>>;

export { AlgoliaConfig, AlgoliaSearchContext, AlgoliaSearchProps, AlgoliaSearchProvider, AlgoliaSearchQuery };
