import { Parent, Literal, Node } from 'unist';

type ImageNode = Parent & {
    url: string;
    alt: string;
    name: string;
    attributes: (Literal & {
        name: string;
    })[];
};
/**
 * Converts markdown image nodes to next/image jsx.
 *
 */
declare function remarkImgToJsx(): (tree: Node) => void;

export { ImageNode, remarkImgToJsx };
