import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { companyFilePath, COMPANIES_PATH } from '@lib/mdxUtils'
import remarkGfm from 'remark-gfm'
import Head from 'next/head'

function Slug_Companies({ slug, source, frontMatter }) {
  // Custom components/renderers to pass to MDX.
  // Since the MDX files aren't loaded by webpack, they have no knowledge of how
  // to handle import statements. Instead, you must include components in scope
  // here.
  const components = {
    // It also works with dynamically-imported components, which is especially
    // useful for conditionally loading components for certain routes.
    // See the notes in README.md for more details.
    Head,
  }

  console.log('name: ', frontMatter.name)
  return (
    <main>
      <h1>Studio Name:</h1>
      <div>{frontMatter.name}</div>
      <MDXRemote {...source} components={components} />
    </main>
  )
}

export const getStaticProps = async ({ params }) => {
  //MDX Stuff
  const jobsFilePath = path.join(COMPANIES_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(jobsFilePath)
  const { content, data } = matter(source)

  //END OF RELEVANT POSTS
  //Back to MDX Stuff
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      slug: params.slug,
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = companyFilePath
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))

    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export default Slug_Companies
