import cn from 'classnames'

interface Props {
  className?: string
  children?: any
  id: string
  bgColor?: string
}
const Section = ({ children, id, className, bgColor }: Props) => {
  return (
    <section
      className={cn('my-12 py-4', { [`${className}`]: className }, { [`bg-${bgColor}`]: bgColor })}
      id={id}
    >
      {children}
    </section>
  )
}

export default Section
