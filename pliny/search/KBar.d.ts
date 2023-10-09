import { FC, ReactNode } from 'react';
import { Action } from 'kbar';

interface KBarSearchProps {
    searchDocumentsPath: string | false;
    defaultActions?: Action[];
    onSearchDocumentsLoad?: (json: any) => Action[];
}
interface KBarConfig {
    provider: 'kbar';
    kbarConfig: KBarSearchProps;
}
/**
 * Command palette like search component with kbar - `ctrl-k` to open the palette.
 *
 * Default actions can be overridden by passing in an array of actions to `defaultActions`.
 * To load actions dynamically, pass in a `searchDocumentsPath` to a JSON file.
 * `onSearchDocumentsLoad` can be used to transform the JSON into actions.
 *
 * To toggle the modal or search from child components, use the search context:
 * ```
 * import { useKBar } from 'kbar'
 * const { query } = useKBar()
 * ```
 * See https://github.com/timc1/kbar/blob/main/src/types.ts#L98-L106 for typings.
 *
 * @param {*} { kbarConfig, children }
 * @return {*}
 */
declare const KBarSearchProvider: FC<{
    children: ReactNode;
    kbarConfig: KBarSearchProps;
}>;

export { KBarConfig, KBarSearchProps, KBarSearchProvider };
