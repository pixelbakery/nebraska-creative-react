import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'
type Props = {
  children?: ReactNode
  color?: string
  className?: string
}
function H1({ children, className, color }: Props) {
  return (
    <h1
      className={cn(
        'mt-16  mb-20  pb-10 border-b-12 border-b-grey-dark font-extrabold text-6xl 2xl:text-[6rem] text-grey-dark leading-none tracking-tighter ',
        { [`${className}]`]: className, [`text-${color}]`]: color },
      )}
    >
      {children}
    </h1>
  )
}

export default H1
