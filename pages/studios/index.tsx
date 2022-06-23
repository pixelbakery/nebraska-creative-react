import fs from 'fs'
import path from 'path'
import { companyFilePath, COMPANIES_PATH } from '@lib/mdxUtils'
import matter from 'gray-matter'
import Link from 'next/link'

function Page_Studios({ allCompanies }) {
  return (
    <div>
      <div>asdfasdgf</div>
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
