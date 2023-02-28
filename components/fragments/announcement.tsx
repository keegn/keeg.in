import { motion } from 'framer-motion'

export function Announcement({
  tagText,
  text,
}: {
  tagText?: string
  text?: string
}) {
  return (
    <div className="flex w-full items-center justify-center pt-16">
      <motion.a
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 self-center border-b border-black/5 bg-black/[0.02] p-3 transition-all hover:bg-white hover:shadow hover:ring-1 hover:ring-black/5 md:rounded-lg lg:mx-auto lg:inline-flex lg:w-auto lg:rounded-full lg:border-b-0 lg:pr-5"
        href="/"
      >
        <div className="flex select-none items-center justify-center rounded-full bg-gradient-to-tl from-pink-500 to-orange-500 py-1 px-2 text-[10px] font-semibold uppercase tracking-wide text-white shadow saturate-[120%]">
          {text || 'New'}
        </div>
        <p className="flex items-center gap-3 text-left text-sm text-black text-opacity-50">
          <span>{text || 'Validate launching spring of 2023'}</span>→
        </p>
      </motion.a>
    </div>
  )
}
