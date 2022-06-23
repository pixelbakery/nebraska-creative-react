import Link from 'next/link'

function Header() {
  return (
    <nav className='py-6 w-full bg-pink-50 flex justify-center'>
      <ul className='flex gap-x-12 '>
        <Link href={'/'} passHref>
          Home
        </Link>
        <Link href={'/studios'} passHref>
          Test
        </Link>
      </ul>
    </nav>
  )
}
export default Header
