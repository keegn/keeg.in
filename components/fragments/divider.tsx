import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export const Divider = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'container mx-auto flex w-full max-w-screen-md flex-col items-center justify-start pb-12',
        className
      )}
    >
      <div className="divider-line" />
    </div>
  )
}
