import React from "react";
import Link from "./Link";
import Tag from "./Tag";

//const { slug, date, title, summary, tags } = post
const tags = ['github', 'guide']

export default function PostCardTest() {
  return (
    <li className="py-12">
      <article>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              {/* <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time> */}
            </dd>
          </dl>
          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  <Link
                    href={`/blog/#`}
                    className="text-gray-900 dark:text-gray-100"
                  >
                    Titulo del post
                  </Link>
                </h2>
                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
              Markdown cheatsheet for all your blogging needs - headers, lists, images, tables and more! An illustrated guide based on GitHub Flavored Markdown.
              </div>
            </div>
            <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/#`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="read el titulo del post"
              >
                Read more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}
