import fs from 'fs'
import path from 'path'

// JOBS

export const COMPANIES_PATH = path.join(process.cwd(), '_companies')
export const companyFilePath = fs.readdirSync(COMPANIES_PATH).filter((path) => /\.mdx?$/.test(path))
