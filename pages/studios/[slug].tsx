import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { companyFilePath, COMPANIES_PATH } from '@lib/mdxUtils'
import remarkGfm from 'remark-gfm'
import Head from 'next/head'
import Link from 'next/link'

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
      <h1>{frontMatter.name}</h1>
      <section>
        <h2>Details About {frontMatter.name}</h2>
        <div>
          <h2>Website</h2>
          <Link href={frontMatter.website}>{`${frontMatter.website}`}</Link>
        </div>
        <div>
          <h2>Year Founded</h2>
          <p>{frontMatter.founded}</p>
        </div>
        <div>
          <h2>Shop Size</h2>
          <p>{frontMatter.size}</p>
        </div>
      </section>
      <section>
        <h2>{frontMatter.name}&apos;s Bio</h2>
        <MDXRemote {...source} components={components} />
      </section>
      <section>
        <h2>{frontMatter.name} – Details</h2>
        <div className='grid grid-cols-2'>
          {frontMatter.locations != undefined ? (
            <div>
              <h3>Locations</h3>
              {frontMatter.locations.map((l) => {
                return <p>{l}</p>
              })}
            </div>
          ) : (
            ''
          )}
          {frontMatter.services != undefined ? (
            <div>
              <h3>Services</h3>
              {frontMatter.services.map((l) => {
                return <p>{l}</p>
              })}
            </div>
          ) : (
            ''
          )}
          {frontMatter.keyPeople != undefined ? (
            <div>
              <h3>Key People</h3>
              {frontMatter.keyPeople.map((l) => {
                return (
                  <div>
                    <p>{l.name}</p>
                    <p>{l.title}</p>
                  </div>
                )
              })}
            </div>
          ) : (
            ''
          )}
          {frontMatter.clients != undefined ? (
            <div>
              <h3>Notable Clients</h3>
              {frontMatter.clients.map((l) => {
                return <p>{l}</p>
              })}
            </div>
          ) : (
            ''
          )}
          {frontMatter.socialProfiles != undefined ? (
            <div>
              <h3>Social Links</h3>
              <ul className='list-none'>
                {frontMatter.socialProfiles.map((s) => {
                  return (
                    <li>
                      {' '}
                      <Link href={`${s.url}`}>{s.platform}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
      </section>
    </main>
  )
}

export const getStaticProps = async ({ params }) => {
  //MDX Stuff
  const jobsFilePath = path.join(COMPANIES_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(jobsFilePath)
  const { content, data } = matter(source)

  data.founded = JSON.parse(data.founded)

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
