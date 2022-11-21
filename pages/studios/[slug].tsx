import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { companyFilePath, COMPANIES_PATH } from '@lib/mdxUtils'
import remarkGfm from 'remark-gfm'
import Head from 'next/head'
import Link from 'next/link'
import H1 from '@typography/H1'
import { Main } from '@modules'
import Image from 'next/image'
import H2 from '@typography/H2'
import Section from '@modules/Section'
import H3 from '@typography/H3'
import ExternalLink from '@icons/ExternalLink'

import { removeHttp } from '@lib/helpers'
import Button_Filled_Back from '@ui/Button_Filled_Back'

const Headshot = ({ l, name }) => {
  return (
    <>
      {l.headshot ? (
        <Image
          width={500}
          height={500}
          className={'object-cover filter grayscale'}
          src={l.headshot}
          alt={`${l.name} is the ${l.title} for ${name}`}
        />
      ) : (
        <Image
          width={500}
          height={500}
          className={'object-cover filter grayscale'}
          src={'/img/placeholder_square.jpg'}
          alt={`${l.name} is the ${l.title} for ${name}`}
        />
      )}
    </>
  )
}
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

  return (
    <Main>
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

        <div className='grid grid-cols-4 gap-x-12 gap-y-24 mt-24'>
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

          <div className='col-span-4'>
            {frontMatter.keyPeople != undefined ? (
              <div className='w-full'>
                <div className='mb-12'>
                  <H3 className='underline underline-offset-8'>Key People</H3>
                </div>
                <ul className='flex flex-row flex-wrap gap-x-8'>
                  {frontMatter.keyPeople.map((l) => {
                    return (
                      <li key={l} className={''}>
                        <div className='w-48 h-48'>
                          {l.externalBio ? (
                            <Link href={l.externalBio}>
                              <Headshot l={l} name={frontMatter.name} />
                            </Link>
                          ) : (
                            <Headshot l={l} name={frontMatter.name} />
                          )}
                        </div>
                        {l.externalBio ? (
                          <Link href={l.externalBio} className='cursor-pointer'>
                            <>
                              <p className='mb-0 mt-3 py-0 leading-none text-black'>{l.name}</p>
                              <p className='text-sm mt-0 italic pt-0'>{l.title}</p>
                            </>
                          </Link>
                        ) : (
                          <>
                            <p className='mb-0 mt-3 py-0 leading-none text-black'>{l.name}</p>
                            <p className='text-sm mt-0 italic pt-0'>{l.title}</p>
                          </>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ) : (
              ''
            )}
          </div>
          <div>
            {frontMatter.clients != undefined ? (
              <div>
                <h3>Notable Clients</h3>
                {frontMatter.clients.map((l) => {
                  return <p key={l}>{l}</p>
                })}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </Section>
      <Section id={'back'}>
        <Button_Filled_Back href={'/studios'} text={'Creative Shops'} />
      </Section>
    </Main>
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
