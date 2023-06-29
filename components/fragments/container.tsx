import clsx from 'clsx'

interface Props {
  className?: string
  children: React.ReactNode
  type?: 'section' | 'fullWidth' | 'nav'
  id?: string
}

export function Container({ className, type, id, ...props }: Props) {
  return (
    <div
      id={id}
      className={clsx(
        type === undefined && 'container',
        type === 'fullWidth' && 'mx-auto',
        type === 'section' && 'mx-auto max-w-lg px-4',
        type === 'nav' &&
          'mx-auto w-auto px-4 py-4 md:px-6 md:py-6 lg:px-12 lg:py-6',
        className
      )}
      {...props}
    />
  )
}
