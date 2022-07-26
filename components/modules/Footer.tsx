import Link from 'next/link'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='w-full py-16 md:px-24'>
      <div className='border-t border-grey border-opacity-50 flex flex-col align-middle justify-center mx-auto max-w-3xl text-grey'>
        <div className='w-full flex flex-col md:flex-row gap-y-12 justify-between py-8'>
          <p>
            © {year}{' '}
            <Link href={'/'} passHref>
              <a className={'underline'}>The Nebraska Creative</a>
            </Link>
          </p>
          <p>
            👩‍🍳 Made W/ Lust &amp; Flour by{' '}
            <a href='https://pixelbakery.com' className='underline'>
              {' '}
              Pixel Bakery
            </a>
          </p>
        </div>
        <p className='text-gray md:text-center max-w-lg md:self-center'>
          We built and maintain this site as a labor of love with no intention of ever profiting off
          of it. If NE Creative helped you in any way, feel free to{' '}
          <a href='' target={'_blank'} rel={'noreferer'} className={'border-b-grey underline'}>
            buy us a coffee
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
export default Footer
