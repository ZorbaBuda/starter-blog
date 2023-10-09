import Link from '@/components/Link'
import PostCardTest from '@/components/PostCardTest'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Posts from './components/Posts'

import PostBundle from '@/lib/mdxBundleExp'
//import { formatDate } from 'pliny/utils/formatDate'
//import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

// export default function Home({ posts }) {
  export default function Home() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Experimental */}
        {/* <PostBundle /> */}
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        {/* Check this way of doing (ekomenyong) <BlogSection posts={posts} /> */}
        <Posts />
      </div>
      {/* {posts.length > MAX_DISPLAY && ( */}
      {20 > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          {/* <NewsletterForm /> */}
        </div>
      )}
    </>
  )
}
