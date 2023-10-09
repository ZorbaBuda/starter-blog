type Meta = {
    id: string,
    title: string,
    date: string,
    tags: string[],
  }
  
  type BlogPost = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>,
  }

  type Toc = {
    value: string;
    depth: number;
    url: string;
}[];

   type Post = {
    /** ID */
    _id: string
    _raw: Record<string, any>
    type: 'Post'
    title: string
    date: IsoDateTimeString
    tags: string[]
    lastmod?: IsoDateTimeString | undefined
    draft?: boolean | undefined
    summary?: string | undefined
    images?: string[] | undefined
    authors?: string[] | undefined
    layout?: string | undefined
    bibliography?: string | undefined
    canonicalUrl?: string | undefined
    /** MDX file body */
    body: MDX
    url: string
    slug: string
  }  