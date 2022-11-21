import { motion } from 'framer-motion'
import Link from 'next/link'

//Public Dev Note: The html and css for the hamburger nav is forked from Mikael Ainalem's Flippin' Burgers pen: https://codepen.io/ainalem/pen/LJYRxz All credit goes to him <3

function Nav_FullscreenMenu({ isActive, setHamToggle }) {
  function handleItemClick() {
    setHamToggle(false)
  }
  const container = {
    hidden: {
      transition: {
        when: 'afterChildren',
        staggerDirection: -1,
        staggerChildren: 0.125,
      },
      opacity: 0,
      transitionEnd: {
        display: 'none',
      },
    },
    show: {
      display: 'block',
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.125,
      },
      transitionEnd: {},
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <>
      <motion.div
        className='fixed top-0 left-0 w-screen h-screen bg-black z-40'
        variants={container}
        initial='hidden'
        animate={isActive ? 'show' : 'hidden'}
      >
        <div className='relative w-full h-full flex justify-center'>
          <ul className='self-center flex flex-col justify-center font-bold text-2xl text-white'>
            <motion.li variants={item}>
              <Link href='/' onClick={() => setHamToggle(false)}>
                Home
              </Link>
            </motion.li>
            <motion.li variants={item}>
              <Link href='/studios' onClick={() => setHamToggle(false)}>
                Creative Studios
              </Link>
            </motion.li>
            <motion.li variants={item}>
              <Link href='/about' onClick={() => setHamToggle(false)}>
                Information
              </Link>
            </motion.li>
            <motion.li variants={item}>
              <Link href='/contact' onClick={() => setHamToggle(false)}>
                Contact
              </Link>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </>
  )
}

export default Nav_FullscreenMenu
