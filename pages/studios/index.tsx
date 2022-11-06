import fs from 'fs'
import path from 'path'
import { companyFilePath, COMPANIES_PATH } from '@lib/mdxUtils'
import matter from 'gray-matter'
import Link from 'next/link'
import { useState } from 'react'

function Page_Studios({ allCompanies }) {
  const [activeFilter, setFilter] = useState('all')

  const [filteredProjectFiles, setFilteredItems] = useState(allCompanies)

  let allCategories = []
  allCompanies.forEach(function (file, i) {
    file.data.services.forEach((s) => {
      if (!allCategories.includes(s)) {
        allCategories.push(s)
      }
    })
  })
  allCategories.forEach((c) => console.log(c))
  const filters = Array.from(new Set(allCategories))

  const handleFilteredItems = (filter) => {
    setFilter(filter)

    if (filter === 'all') {
      setFilteredItems(allCompanies)
    } else {
      setFilteredItems(allCompanies.filter((file) => file.services === filter))
    }
  }
  return (
    <div>
      <div>asdfasdgf</div>
      {filters.map((f, i) => {
        return <div key={i}>{f}</div>
      })}
      <section>
        <ul>
          {allCompanies.map((company, index) => {
            return (
              <li key={index}>
                <Link
                  as={`/studios/${company.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/studios/[slug]`}
                  passHref
                >
                  <a> {`${index}: ${company.data.name}`}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
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
