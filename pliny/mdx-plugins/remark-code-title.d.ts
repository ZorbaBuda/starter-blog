import { Parent } from 'unist';

/**
 * Parses title from code block and inserts it as a sibling title node.
 *
 */
declare function remarkCodeTitles(): (tree: Parent & {
    lang?: string;
}) => void;

export { remarkCodeTitles };
