import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { companyFilePath } from '@lib/mdxUtils'
import remarkGfm from 'remark-gfm'
import Head from 'next/head'
import Link from 'next/link'
import H1 from '@typography/H1'
import { Main } from '@modules'
import H2 from '@typography/H2'
import Section from '@modules/Section'
import H3 from '@typography/H3'
import ExternalLink from '@icons/ExternalLink'
import { removeHttp } from '@lib/helpers'
import Section_Headshots from '@studios/Section_Headshots'
import Section_PrevNext from '@studios/Section_PrevNext'
import Section_Back from '@studios/Section_Back'
import Section_NextSeo from '@studios/Section_NextSeo'

const Slug_Companies = ({ slug, source, frontMatter, prevIndex, nextIndex }) => {
  // Custom components/renderers to pass to MDX.
  // Since the MDX files aren't loaded by webpack, they have no knowledge of how
  // to handle import statements. Instead, you must include components in scope
  // here.
  const components = {
    // It also works with dynamically-imported components, which is especially
    // useful for conditionally loading components for certain routes.
    // See the notes in README.md for more details.
  }

  return (
    <Main>
      <Section_NextSeo name={frontMatter.name} description={frontMatter.description} slug={slug} />
      <H1>{frontMatter.name}</H1>
      <Section id={'details'} className={''}>
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-x-12 mb-20 gap-y-12'>
          <div className='col-span-1 lg:col-span-2'>
            <H2>Contact Points</H2>
          </div>
          <div className='col-span-1'>
            <H3 className=''>Website</H3>
            <Link
              className=' text-grey border-b border-dotted hover:text-black duration-300 ease-in-out fill-grey hover:fill-black'
              href={frontMatter.website}
            >
              <>
                {`${removeHttp(frontMatter.website)}`}{' '}
                <i className='inline-block w-3 '>
                  <ExternalLink />
                </i>
              </>
            </Link>
          </div>
          {frontMatter.contact != '' || undefined ? (
            <div className='col-span-1'>
              <H3>New Business</H3>
              <Link
                href={`mailto:${frontMatter.contact}`}
                className='text-grey border-b border-dotted hover:text-black duration-300 ease-in-out fill-grey hover:fill-black'
              >
                <>
                  {frontMatter.contact}{' '}
                  <i className='inline-block w-3 '>
                    <ExternalLink />
                  </i>
                </>
              </Link>
            </div>
          ) : (
            ''
          )}
          <div className='col-span-1'>
            {frontMatter.socialProfiles != undefined ? (
              <div>
                <H3 className=''>Social Links</H3>
                <ul className='list-none'>
                  {frontMatter.socialProfiles.map((s) => {
                    return (
                      <li key={s}>
                        {' '}
                        <Link
                          href={`${s.url}`}
                          className={
                            'text-grey border-b border-dotted hover:text-black duration-300 ease-in-out fill-grey hover:fill-black'
                          }
                        >
                          {s.platform}{' '}
                          <i className='inline-block w-3 '>
                            <ExternalLink />
                          </i>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </Section>
      <Section id={'bio'} className={'border-b-12 border-b-grey-dark pb-32'}>
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-x-4'>
          <div className='col-span-1'>
            <H2>{frontMatter.name}&apos;s Bio</H2>
          </div>
          <div className='col-span-1 xl:col-span-2 flex xl:justify-center'>
            <div className='max-w-xl '>
              <MDXRemote {...source} components={components} />
            </div>
          </div>
        </div>
      </Section>
      <Section id={'facts'} className={'border-b-12 border-b-grey-dark'}>
        <H2>Details About {frontMatter.name}</H2>

        <div className='grid grid-cols-4 gap-x-12 gap-y-24 mt-24 mb-12'>
          <div className='col-span-2 lg:col-span-1'>
            {frontMatter.locations != undefined ? (
              <div>
                <H3 className='underline underline-offset-8'>Locations</H3>
                {frontMatter.locations.map((l) => {
                  return (
                    <p className=' leading-snug py-0 my-0' key={l}>
                      {l}
                    </p>
                  )
                })}
              </div>
            ) : (
              ''
            )}
          </div>
          <div className='col-span-2 lg:col-span-1'>
            {frontMatter.services != undefined ? (
              <div>
                <H3 className='underline underline-offset-8'>Services</H3>
                <ul className='list-none grid grid-cols-1 gap-x-4 gap-y-2 text-grey '>
                  {frontMatter.services.map((l) => {
                    return (
                      <li className='leading-snug my-0 py-0' key={l}>
                        {l}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className='col-span-2 lg:col-span-1'>
            <H3 className='underline underline-offset-8'>Year Founded</H3>
            <p>{frontMatter.founded}</p>
          </div>
          <div className='col-span-2 lg:col-span-1'>
            <H3 className='underline underline-offset-8'>Shop Size</H3>
            <p>{frontMatter.size}</p>
          </div>
          <div className='col-span-2 lg:col-span-1'>
            {frontMatter.clients != '' || frontMatter.clients != undefined ? (
              <div>
                <H3 className='underline underline-offset-8'>Notable Clients</H3>
                <ul className='list-none grid grid-cols-1 gap-x-4 gap-y-2 text-grey '>
                  {frontMatter.clients.map((l) => {
                    return (
                      <li className='leading-snug my-0 py-0' key={l}>
                        {l}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ) : (
              ''
            )}
          </div>
          <Section_Headshots keyPeople={frontMatter.keyPeople} name={frontMatter.name} />
        </div>
      </Section>
      <Section_Back />
      <Section_PrevNext prev={prevIndex} next={nextIndex} />
    </Main>
  )
}

export const getStaticProps = async ({ params }) => {
  const COMPANIES_PATH = path.join(process.cwd(), '_companies')
  const temp = fs.readdirSync(COMPANIES_PATH).filter((path) => /\.mdx?$/.test(path))

  //MDX Stuff
  const companiesFilePaths = path.join(COMPANIES_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(companiesFilePaths)
  const { content, data } = matter(source)
  data.founded = JSON.parse(data.founded)

  //get prev next post
  const allPeople = temp
    .map((filePath) => {
      const source = fs.readFileSync(path.join(COMPANIES_PATH, filePath))
      const { data } = matter(source)

      return { filePath, data }
    })
    .filter((cs) => cs.data.active === true)
    .sort((cs1, cs2) => (cs1.data.name < cs2.data.name ? -1 : 1))

  //Find the previous and next person on the roster, alphabetically by last name.
  let thisIndex,
    prevIndex,
    nextIndex = null

  if (data.active != false) {
    allPeople.map((p, index) => {
      if (p.data.name === data.name) {
        thisIndex = index
      }
    })

    if (thisIndex != undefined && thisIndex === 0)
      prevIndex = allPeople[Object.keys(allPeople).length - 1]
    else prevIndex = allPeople[thisIndex - 1]

    if (thisIndex != undefined && thisIndex === Object.keys(allPeople).length - 1)
      nextIndex = allPeople[0]
    else nextIndex = allPeople[thisIndex + 1]
  } else (thisIndex = null), (nextIndex = null), (prevIndex = null)

  //End of prev/next search

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
      prevIndex: prevIndex,
      nextIndex: nextIndex,
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
