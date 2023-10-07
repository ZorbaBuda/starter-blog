import { getPostsMeta } from "@/lib/posts";
import PostItem from "./PostItem";

const MAX_DISPLAY = 100;

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
    <>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {!posts.length && "No posts found."}
        {posts.slice(0, MAX_DISPLAY).map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
}
