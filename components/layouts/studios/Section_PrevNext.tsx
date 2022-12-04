import Arrow_Right from '@icons/Arrow_Right'
import Section from '@modules/Section'
import Link from 'next/link'

const Prev = ({ prev }) => {
  return (
    <Link
      as={`/studios/${prev.filePath.replace(/\.mdx?$/, '')}`}
      href={`/studios/[slug]`}
      hrefLang={'en-US'}
    >
      <div className='text-white flex gap-x-6'>
        <i className='self-center block rotate-180 text-white fill-white w-4'>
          <Arrow_Right />
          {}
        </i>
        <div>
          <span>prev</span>
          <p className='text-white font-semibold text-xl'>{prev.data.name}</p>
        </div>
      </div>
    </Link>
  )
}

const Next = ({ next }) => {
  return (
    <Link
      as={`/studios/${next.filePath.replace(/\.mdx?$/, '')}`}
      href={`/studios/[slug]`}
      hrefLang={'en-US'}
    >
      <div className='text-white flex gap-x-6'>
        <div>
          <span>next</span>
          <p className='text-white font-semibold text-xl'>{next.data.name}</p>
        </div>
        <i className='self-center block text-white fill-white w-4'>
          <Arrow_Right />
          {}
        </i>
      </div>
    </Link>
  )
}
const Section_PrevNext = ({ prev, next }) => {
  return (
    <Section bgColor='black' id='prevNext'>
      <div className=' mx-24  py-6 flex flex-row justify-between'>
        <Prev prev={prev} />
        <Next next={next} />
      </div>
    </Section>
  )
}

export default Section_PrevNext
