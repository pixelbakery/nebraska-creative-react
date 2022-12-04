import Link from 'next/link'
import Headshot_Card from '@studios/Headshot_Card'
import H3 from '@typography/H3'
const Section_Headshots = ({ keyPeople, name }) => {
  return (
    <div className='col-span-4 lg:col-span-3'>
      {keyPeople != '' || undefined ? (
        <div className='w-full'>
          <div className='mb-12'>
            <H3 className='underline underline-offset-8'>Key People</H3>
          </div>
          <ul className='flex flex-row flex-wrap gap-x-8'>
            {keyPeople.map((l) => {
              return (
                <li key={l} className={''}>
                  <div className='w-48 h-48 overflow-hidden'>
                    {l.externalBio ? (
                      <Link href={l.externalBio}>
                        <Headshot_Card l={l} name={name} />
                      </Link>
                    ) : (
                      <Headshot_Card l={l} name={name} />
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
  )
}

export default Section_Headshots
