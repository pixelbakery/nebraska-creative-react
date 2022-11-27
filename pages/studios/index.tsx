import fs from 'fs'
import path from 'path'
import { companyFilePath, COMPANIES_PATH } from '@lib/mdxUtils'
import matter from 'gray-matter'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import H1 from 'components/elements/typography/H1'
import Studios_Card from 'components/elements/cards/Studios_Card'
import cn from 'classnames'
import Main from '@modules/Main'
import H2 from 'components/elements/typography/H2'
import Section from '@modules/Section'

interface Props {
  data?: any
  person?: any
  allCompanies: any
}

function Page_Studios({ allCompanies }: Props) {
  let allCategories = []
  allCompanies.forEach(function (file, i) {
    file.data.services.forEach((s) => {
      if (!allCategories.includes(s)) {
        allCategories.push(s)
      }
    })
  })
  const [activeFilter, setActiveFilter] = useState(allCategories as any)
  const [isAllActive, setAllActive] = useState(true)
  const [filteredItems, setFilteredItems] = useState(allCompanies)

  // SEARCH BOX
  const companies: any = Array.from(new Set(allCompanies))

  const [searchTerm, setSearchTerm] = useState('')
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const results = !searchTerm
    ? companies
    : companies.filter((company) =>
        company.data.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
      )

  //END SEARCH BOX
  const filters = Array.from(new Set(allCategories))

  // Update what's included in the filter
  const handleFilterChange = (e, filter) => {
    setAllActive(false)
    // If active filter should be set to all
    if (activeFilter.length === allCategories.length) {
      setActiveFilter([])
      setActiveFilter((activeFilter) => [...activeFilter, `${filter}`])
    }
    //If current active filter includes a clicked filter item, remove it
    else if (!activeFilter.includes(filter)) {
      setActiveFilter((activeFilter) => [...activeFilter, `${filter}`])
    }
    //If current filter does not include clicked item, include it
    else if (activeFilter.includes(filter)) {
      setActiveFilter((current) => current.filter((f) => f !== filter))
    }
  }

  // Reset the filter to include all companies
  const handleAllItems = () => {
    setAllActive(true)
    setActiveFilter(allCategories)
    setFilteredItems(allCompanies)
  }

  return (
    <Main>
      <section>
        <H1>Creative Studios</H1>
        <p>
          The Nebraska Creative is your go-to resource for discovering design, advertising, and
          creative agencies in the heart of the Midwest – aka good ol’ Nebraska. With the mindset of
          collaboration over competition, The Nebraska Creative embraces a diverse range of creative
          shops to showcase the assets and skills each has to offer – helping you find the perfect
          team of individuals ready to refresh your business and bring new ideas to life.{' '}
        </p>

        <p>
          Read more about{' '}
          <Link href={'https://nebraska-creative.com/information'} className='underline'>
            why we created
          </Link>{' '}
          this site.
        </p>
      </section>

      <Section id='filters'>
        <div>
          <H2>Categories</H2>
        </div>
        <div className='flex flex-row gap-x-4 max-w-6xl flex-wrap gap-y-3'>
          <button
            onClick={(e) => handleAllItems()}
            className={cn('px-4 py-1 border border-black rounded-full', {
              [`bg-black text-white`]: isAllActive || activeFilter.length === 0,
            })}
          >
            All
          </button>
          {filters.map((f, i) => {
            return (
              <button
                onClick={(e) => handleFilterChange(e, f)}
                className={cn('px-4 py-1 border border-black rounded-full', {
                  ['bg-black text-white']: activeFilter.includes(f) && !isAllActive,
                })}
                key={i}
              >
                {f}
              </button>
            )
          })}
        </div>
        <div className='my-12'>
          <H2>Search</H2>
          <input
            className='border-black rounded-full border-2 w-full py-2 px-4 focus:ring-black ring-inset'
            type='text'
            placeholder='Search'
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </Section>
      {results.length === 0 ? 'No Results Found' : ''}
      <Section id={'results'}>
        <div className='grid grid-cols-1 gap-y-12'>
          {activeFilter.length != allCategories.length
            ? results
                // .filter((c) => c.data.services.some((r, i) => activeFilter.includes(r)))
                .filter((c) => activeFilter.every((elem) => c.data.services.includes(elem)))
                .map((c, index) => {
                  return (
                    <Fragment key={index}>
                      <Studios_Card index={index} company={c} />
                    </Fragment>
                  )
                })
            : results.map((c, index) => {
                return (
                  <Fragment key={index}>
                    <Studios_Card index={index} company={c} />
                  </Fragment>
                )
              })}
        </div>
      </Section>
    </Main>
  )
}
export default Page_Studios

export function getStaticProps() {
  const allCompanies = companyFilePath.map((filePath) => {
    const source = fs.readFileSync(path.join(COMPANIES_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { allCompanies } }
}
