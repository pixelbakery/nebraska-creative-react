import Link from 'next/link'
import Arrow_Right from '../iconography/Arrow_Right'
import H3 from '../typography/H3'
import { motion } from 'framer-motion'

const Studios_Card = ({ company, index }) => {
  return (
    <Link as={`/studios/${company.filePath.replace(/\.mdx?$/, '')}`} href={`/studios/[slug]`}>
      <motion.article
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className='group hover:scale-[100.5%] hover:animate-pulse ease-in-out duration-300 bg-grey-light px-8 py-12 bg-gray rounded-sm cursor-pointer'
      >
        <H3>{`${company.data.name}`}</H3>
        <div className='grid grid-cols-6 gap-x-12'>
          <div className='col-span-6 lg:col-span-5 xl:col-span-3 max-w-md '>
            {company.data.description ? (
              <p className='line-clamp-3 xl:line-clamp-2 italic text-md leading-snug  tracking-wide '>
                {company.data.description}
              </p>
            ) : (
              ''
            )}
          </div>
          <div className='col-span-1 hidden xl:block'>
            <span className='text-black font-semibold mb-2 block text-xs'>Location(s)</span>
            <ul className='list-none '>
              {company.data.locations ? (
                company.data.locations.map((l, index) => {
                  return (
                    <li key={index} className='py-1'>
                      <p className='my-0 leading-none'>{l}</p>
                    </li>
                  )
                })
              ) : (
                <p className='my-0 leading-none'>–</p>
              )}
            </ul>
          </div>
          <div className='col-span-1 hidden xl:block'>
            <span className='text-black font-semibold mb-1 block text-xs'>Founded</span>
            <p className='mt-3 leading-none'>{company.data.founded ? company.data.founded : '–'}</p>
          </div>
          <div className='col-span-1 hidden xl:block'>
            <span className='text-black font-semibold mb-1 block text-xs'>Team Size</span>
            <p className='mt-3 leading-none'>{company.data.size ? company.data.size : '–'}</p>
          </div>
        </div>

        <div className='text-sm border-b  border-dotted inline pb-1 group-hover:animate-wiggle'>
          <span> more details{'  '}</span>
          <i className='w-2 self-center inline-block group-hover:translate-x-1 duration-300 ease-in-out'>
            <Arrow_Right />
          </i>
        </div>
      </motion.article>
    </Link>
  )
}

export default Studios_Card
