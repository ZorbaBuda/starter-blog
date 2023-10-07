import 'css/prism.css'
import 'katex/dist/katex.css'
import PageTitle from '@/app/components/PageTitle'
//import { components } from '@/components/MDXComponents'
//import { MDXLayoutRenderer } from 'pliny/mdx-components'
//import { sortPosts, coreContent } from 'pliny/utils/contentlayer'
//import { allBlogs, allAuthors } from 'contentlayer/generated'
//import type { Authors, Blog } from 'contentlayer/generated'
//import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/app/layout/PostLayout'
//import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";


// const isProduction = process.env.NODE_ENV === 'production'
const defaultLayout = 'PostLayout'

type Props = {
  params: {
    postId: string;
  };
};
// const layouts = {
//   PostSimple,
//   PostLayout,
//   PostBanner,
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string[] }
// }): Promise<Metadata | undefined> {
//   const slug = decodeURI(params.slug.join('/'))
//   const post = allBlogs.find((p) => p.slug === slug)
//   const authorList = post?.authors || ['default']
//   const authorDetails = authorList.map((author) => {
//     const authorResults = allAuthors.find((p) => p.slug === author)
//     return coreContent(authorResults as Authors)
//   })
//   if (!post) {
//     return
//   }

//   const publishedAt = new Date(post.date).toISOString()
//   const modifiedAt = new Date(post.lastmod || post.date).toISOString()
//   const authors = authorDetails.map((author) => author.name)
//   let imageList = [siteMetadata.socialBanner]
//   if (post.images) {
//     imageList = typeof post.images === 'string' ? [post.images] : post.images
//   }
//   const ogImages = imageList.map((img) => {
//     return {
//       url: img.includes('http') ? img : siteMetadata.siteUrl + img,
//     }
//   })

//   return {
//     title: post.title,
//     description: post.summary,
//     openGraph: {
//       title: post.title,
//       description: post.summary,
//       siteName: siteMetadata.title,
//       locale: 'en_US',
//       type: 'article',
//       publishedTime: publishedAt,
//       modifiedTime: modifiedAt,
//       url: './',
//       images: ogImages,
//       authors: authors.length > 0 ? authors : [siteMetadata.author],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: post.title,
//       description: post.summary,
//       images: imageList,
//     },
//   }
// }

// export const generateStaticParams = async () => {
//   const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }))

//   return paths
// }

export default async function Page({  params: { postId } }: Props) {
 
  const post = await getPostByName(`${postId}.mdx`); //deduped! Next only requested when is needed

  if (!post) notFound();
  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));


  //const Layout = layouts[post.layout || defaultLayout]
  const Layout = defaultLayout

  return (
    <>
    <script
      type="application/ld+json"
      // dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <PostLayout content={content} >
     {content}
    </PostLayout>
  </>
  )
    // <>
    //   {isProduction && post && 'draft' in post && post.draft === true ? (
    //     <div className="mt-24 text-center">
    //       <PageTitle>
    //         Under Construction{' '}
    //         <span role="img" aria-label="roadwork sign">
    //           🚧
    //         </span>
    //       </PageTitle>
    //     </div>
    //   ) : (
    //     <>
    //       <script
    //         type="application/ld+json"
    //         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    //       />
    //       <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
    //         <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
    //       </Layout>
    //     </>
    //   )}
    // </>
  

}

