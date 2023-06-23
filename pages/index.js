import Link from 'next/link';
import { fetchEntries } from '@util/contentfulPosts'

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Post from '@components/Post'
import Layout, { GradientBackground } from '@components/Layout';
import ArrowIcon from '@components/ArrowIcon';
import SEO from '@components/SEO';
import { fetchGlobal } from '@util/contentfulGlobal'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';




export default function Home({ posts, globalContent }) {
  return (
    <Layout>
      <SEO title={globalContent.title} description={globalContent.description} />
      <Header name={globalContent.title} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalContent.title}
        </h1>
        <ul className="w-full">
          {posts.map((post) => (
            console.log(documentToHtmlString(post.content)),
            console.log(post),
            <li
              key={post.title}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              {post.title && (
                <Link
                  as={`/posts/${post.title}`}
                  href={`/posts/[slug]`}
                >
                  <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                    {post.date && (
                      <p className="uppercase mb-3 font-bold opacity-60">
                        {post.date}
                      </p>
                    )}
                    <h2 className="text-2xl md:text-3xl">{post.title}</h2>
                    {post.content && (
                      <div className="mt-3 text-lg opacity-60">
                        {documentToReactComponents(post.content)}
                      </div>
                    )}
                    <ArrowIcon className="mt-4" />
                  </a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalContent.copyrightText} version="1.0" />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>

  );
}

export async function getStaticProps() {
  const globalContent = await fetchGlobal()
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  console.log(`P= ${res}`)

  return {
    props: {
      posts,
      globalContent
    }
  }
}
