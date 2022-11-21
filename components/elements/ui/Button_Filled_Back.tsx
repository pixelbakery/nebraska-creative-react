import Link from 'next/link'
import Arrow_Right from '@icons/Arrow_Right'

const Button_Filled = ({ href, text }) => {
  return (
    <Link
      href={href}
      className={
        'group hover:scale-99 ease-in-out duration-150 relative bg-black py-3 px-6 my-2 text-white flex flex-row justify-center w-fit gap-x-4 '
      }
    >
      <i className='block relative fill-white w-3 rotate-180 self-center duration-150 ease-in-out group-hover:-translate-x-1'>
        <Arrow_Right />
      </i>
      <span className=' text-lg text-white'>{text}</span>
    </Link>
  )
}

export default Button_Filled
