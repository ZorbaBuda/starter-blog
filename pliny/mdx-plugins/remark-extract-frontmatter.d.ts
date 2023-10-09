import { Parent } from 'unist';
import { VFile } from 'vfile';

/**
 * Extracts frontmatter from markdown file and adds it to the file's data object.
 *
 */
declare function remarkExtractFrontmatter(): (tree: Parent, file: VFile) => void;

export { remarkExtractFrontmatter };
