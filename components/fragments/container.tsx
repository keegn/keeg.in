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
        type === 'section' && 'mx-auto max-w-screen-xl px-4 md:px-12 lg:px-16',
        type === 'nav' &&
          'mx-auto w-full max-w-screen-xl px-4 py-4 md:px-6 md:py-6 lg:px-12 lg:py-8',
        className
      )}
      {...props}
    />
  )
}
