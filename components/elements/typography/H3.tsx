import cn from 'classnames'
interface Props {
  children: React.ReactNode
  className?: string
}

const H3 = ({ children, className }: Props) => {
  return (
    <h3 className={cn('text-grey-dark text-2xl font-bold mb-4', { [`${className}`]: className })}>
      {children}
    </h3>
  )
}

export default H3
