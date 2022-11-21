import cn from 'classnames'

interface Props {
  className?: string
  children: any
  id: string
}
const Section = ({ children, id, className }: Props) => {
  return (
    <section className={cn('my-12 py-4', { [`${className}`]: className })} id={id}>
      {children}
    </section>
  )
}

export default Section
