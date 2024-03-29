import Nav_HamWrapper from 'components/elements/navigation/Nav_HamWrapper'
import Image from 'next/image'
import Link from 'next/link'
import NE_creative_logo from 'public/img/NE_creative_logo.png'
function Nav() {
  return (
    <>
      <nav className='px-14 py-20 bg-black h-screen sticky left-0 top-0 hidden md:flex md:w-[29em] flex-col justify-start'>
        <Link href={'/'}>
          <div className='mx-auto w-full aspect-w-1 aspect-h-1 cursor-pointer'>
            <Image
              width={1080}
              height={1080}
              src={NE_creative_logo}
              className='object-contain'
              alt='The Nebraska Creative is a collection of design studios, advertising agencies, and creative shops in Nebraska.'
            />
          </div>
        </Link>
        <div className='my-8 text-white opacity-90 text-lg italic font-extrabold text-center font-heading'>
          Collaboration Over Competition. Always.
        </div>
        <div className='my-12'>
          <ul className='text-white text-2xl font-bold uppercase flex flex-col gap-y-4'>
            <li className='w-fit border-b border-black hover:border-white hover:border-b duration-300'>
              <Link href={'/studios'} className='text-white'>
                Creative Shops
              </Link>
            </li>
            <li className='w-fit border-b border-black hover:border-white hover:border-b duration-300'>
              <Link href={'/about'} className='text-white'>
                Information
              </Link>
            </li>
            <li className='w-fit border-b border-black hover:border-white hover:border-b duration-300'>
              <Link href={'/contact'} className='text-white'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Nav_HamWrapper />
    </>
  )
}

export default Nav
