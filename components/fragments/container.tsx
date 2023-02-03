import clsx from 'clsx'

interface Props {
  className?: string
  children: React.ReactNode
  fullWidth?: boolean
  section?: boolean
  navigation?: boolean
}

export function Container({
  className,
  fullWidth,
  section,
  navigation,
  ...props
}: Props) {
  return (
    <div
      className={clsx(
        fullWidth ? 'mx-auto' : 'mx-auto max-w-screen-xl',
        className,
        section && 'px-4 sm:px-6 lg:px-8',
        navigation && 'px-4 py-4',
      )}
      {...props}
    />
  )
}
