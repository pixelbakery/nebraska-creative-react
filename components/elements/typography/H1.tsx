import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'
type Props = {
  children?: ReactNode
  color?: string
  className?: string
}
function H1({ children }) {
  return (
    <h1 className='font-bold text-[6rem] text-grey-dark leading-none tracking-tighter mb-8'>
      {children}
    </h1>
  )
}

export default H1
