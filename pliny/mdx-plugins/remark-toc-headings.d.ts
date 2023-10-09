import { VFile } from 'vfile';
import { Parent } from 'unist';

type Toc = {
    value: string;
    depth: number;
    url: string;
}[];
/**
 * Extracts TOC headings from markdown file and adds it to the file's data object.
 */
declare function remarkTocHeadings(): (tree: Parent, file: VFile) => void;
/**
 * Passes markdown file through remark to extract TOC headings
 *
 * @param {string} markdown
 * @return {*}  {Promise<Toc>}
 */
declare function extractTocHeadings(markdown: string): Promise<Toc>;

export { Toc, extractTocHeadings, remarkTocHeadings };
