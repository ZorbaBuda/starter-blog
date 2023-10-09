import { allPosts } from '@/.contentlayer/generated';
import Component from '@/components/mdx-component';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TableOfContents from '@/components/TableOfContents';

type BlogParam = {
  postId: string;
};

interface BlogDetailsProps {
  params: BlogParam;
}

async function getPostFromParams(params: BlogParam) {
  const slug = params.postId;
  
  const post = allPosts.find((p) => p.slug === slug);


  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: BlogDetailsProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

export async function generateStaticParams(): Promise<
  BlogDetailsProps['params'][]
> {
  return allPosts.map((post) => ({
    postId: post.slug,
  }));
}

const BlogDetails: React.FC<BlogDetailsProps> = async ({ params }) => {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    // to do concept of BlogHeader component
    <div className='flex justify-center items-center w-full '>
      <article className='prose prose-blog text-white'>
        <h1>{post.title}</h1>
        <h2>{post.summary}</h2>
        <h2>{post.authors}</h2>
        
        

        <div className="flex flex-col items-center justify-start lg:flex-row lg:items-start lg:justify-between">
       
        <TableOfContents source={post.body.raw} />

        <article className="max-w-full px-4 pb-8 text-dark lg:max-w-3xl">

        <Component code={post.body.code} />

        </article>
        </div>
       
      </article>
    </div>
  );
};

export default BlogDetails;
