import { allPosts } from '@/.contentlayer/generated';
import Component from '@/components/mdx-component';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type BlogParam = {
  postId: string;
};

interface BlogDetailsProps {
  params: BlogParam;
}

async function getPostFromParams(params: BlogParam) {
  const slug = params.postId;
  console.log(params)
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
    blogId: post.slug,
  }));
}

const BlogDetails: React.FC<BlogDetailsProps> = async ({ params }) => {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <div className='flex justify-center items-center w-full '>
      <article className='prose prose-blog text-white'>
        <h1>{post.title}</h1>
        <h2>{post.summary}</h2>
        <h2>{post.authors}</h2>
        <Component code={post.body.code} />
      </article>
    </div>
  );
};

export default BlogDetails;
