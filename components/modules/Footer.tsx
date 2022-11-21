import Link from 'next/link'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='w-full py-16 lg:px-24'>
      <div className='border-t border-grey border-opacity-50 flex flex-col align-middle justify-center mx-auto max-w-3xl text-grey'>
        <div className='w-full flex flex-col lg:flex-row lg:gap-y-12 justify-between py-8'>
          <p>
            © {year}{' '}
            <Link href={'/'} className={'underline'}>
              The Nebraska Creative
            </Link>
          </p>
          <p>
            👩‍🍳 Made W/ Love &amp; Flour by{' '}
            <Link href='https://pixelbakery.com' className='underline'>
              {' '}
              Pixel Bakery
            </Link>
          </p>
        </div>
        <p className='text-gray lg:text-center max-w-lg lg:self-center'>
          We built and maintain this site as a labor of love with no intention of ever profiting off
          of it. That said, servers cost money, so if NE Creative helped you in any way, feel free
          to{' '}
          <Link href='' target={'_blank'} rel={'noreferer'} className={'border-b-grey underline'}>
            buy us a coffee
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
export default Footer
