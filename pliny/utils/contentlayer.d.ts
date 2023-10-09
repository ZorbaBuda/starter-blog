import { Document, MDX } from 'contentlayer/core';

type MDXDocument = Document & {
    body: MDX;
};
type MDXDocumentDate = MDXDocument & {
    date: string;
};
type MDXBlog = MDXDocumentDate & {
    tags?: string[];
    draft?: boolean;
};
type MDXAuthor = MDXDocument & {
    name: string;
};
declare function dateSortDesc(a: string, b: string): 1 | 0 | -1;
/**
 * Sorts a list of MDX documents by date in descending order
 *
 * @param {MDXDocumentDate[]} allBlogs
 * @param {string} [dateKey='date']
 * @return {*}
 */
declare function sortPosts<T extends MDXDocumentDate>(allBlogs: T[], dateKey?: string): T[];
/**
 * Kept for backwards compatibility
 * Please use `sortPosts` instead
 * @deprecated
 * @param {MDXBlog[]} allBlogs
 * @return {*}
 */
declare function sortedBlogPost(allBlogs: MDXDocumentDate[]): MDXDocumentDate[];
type ConvertUndefined<T> = OrNull<{
    [K in keyof T as undefined extends T[K] ? K : never]-?: T[K];
}>;
type OrNull<T> = {
    [K in keyof T]: Exclude<T[K], undefined> | null;
};
type PickRequired<T> = {
    [K in keyof T as undefined extends T[K] ? never : K]: T[K];
};
type ConvertPick<T> = ConvertUndefined<T> & PickRequired<T>;
/**
 * A typesafe omit helper function
 * @example pick(content, ['title', 'description'])
 *
 * @param {Obj} obj
 * @param {Keys[]} keys
 * @return {*}  {ConvertPick<{ [K in Keys]: Obj[K] }>}
 */
declare const pick: <Obj, Keys extends keyof Obj>(obj: Obj, keys: Keys[]) => ConvertPick<{ [K in Keys]: Obj[K]; }>;
/**
 * A typesafe omit helper function
 * @example omit(content, ['body', '_raw', '_id'])
 *
 * @param {Obj} obj
 * @param {Keys[]} keys
 * @return {*}  {Omit<Obj, Keys>}
 */
declare const omit: <Obj, Keys extends keyof Obj>(obj: Obj, keys: Keys[]) => Omit<Obj, Keys>;
type CoreContent<T> = Omit<T, 'body' | '_raw' | '_id'>;
/**
 * Omit body, _raw, _id from MDX document and return only the core content
 *
 * @param {T} content
 * @return {*}  {CoreContent<T>}
 */
declare function coreContent<T extends MDXDocument>(content: T): CoreContent<T>;
/**
 * Omit body, _raw, _id from a list of MDX documents and returns only the core content
 * If `NODE_ENV` === "production", it will also filter out any documents with draft: true.
 *
 * @param {T[]} contents
 * @return {*}  {CoreContent<T>[]}
 */
declare function allCoreContent<T extends MDXDocument>(contents: T[]): CoreContent<T>[];

export { CoreContent, MDXAuthor, MDXBlog, MDXDocument, MDXDocumentDate, allCoreContent, coreContent, dateSortDesc, omit, pick, sortPosts, sortedBlogPost };
