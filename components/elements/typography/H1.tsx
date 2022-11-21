import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'
type Props = {
  children?: ReactNode
  color?: string
  className?: string
}
function H1({ children }) {
  return (
    <section className='my-16 border-b-12 border-b-grey-dark'>
      <h1 className=' font-extrabold text-6xl 2xl:text-[6rem] text-grey-dark leading-none tracking-tighter mb-8'>
        {children}
      </h1>
    </section>
  )
}

export default H1
