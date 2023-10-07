import { getPostsMeta } from "@/lib/posts";
import PostItem from "./PostItem";
import { allPosts } from '@/.contentlayer/generated'

const MAX_DISPLAY = 100;

export default async function Posts() {
  //const posts = await getPostsMeta();

  if (!allPosts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
    <>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {!allPosts.length && "No posts found."}
        {allPosts.slice(0, MAX_DISPLAY).map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </ul>
    </>
  );
}
