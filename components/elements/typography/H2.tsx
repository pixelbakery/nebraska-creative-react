import cn from 'classnames'

interface Props {
  color?: string
  children: any
}

const H2 = ({ children, color }: Props) => {
  return (
    <h2 className={cn('text-grey-dark text-4xl font-bold mb-6', { [`text-${color}`]: color })}>
      {children}
    </h2>
  )
}

export default H2
