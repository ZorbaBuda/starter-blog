import getFormattedDate from "@/lib/getFormattedDate";
//import { getPostsMeta, getPostByName } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
//import 'highlight.js/styles/github-dark.css'
import {allPosts} from '@/.contentlayer/generated'
export const revalidate = 0;
import type {  Post } from '@/.contentlayer/generated'

type Props = {
  params: {
    postId: string;
  };
};

export const generateStaticParams = async () => {
  const paths = allPosts.map((p) => ({ slug: p.slug.split('/') }))

  return paths
}

// export async function generateMetadata({ params: { postId } }: Props) {
//   console.log(postId)
//   const post = await getPostByName(`${postId}.mdx`); //deduped! Next only requested when is needed

//   if (!post) {
//     return {
//       title: "Post not found",
//     };
//   }

//   return {
//     title: post.meta.title,
//   };
// }

export default async function Post({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  // if (!post) notFound();
  // const { meta, content } = post;
  
  const post = allPosts.find((p) => p.slug === slug) as Post
  //const pubDate = getFormattedDate(meta.date);

  
  // const tags = meta.tags.map((tag, i) => (
  //   <Link key={i} href={`/tags/${tag}`}>
  //     {tag}
  //   </Link>
  // ));


  //const Layout = layouts[post.layout || defaultLayout]
  //const Layout = defaultLayout
  const mainContent = coreContent(post)
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
  
}