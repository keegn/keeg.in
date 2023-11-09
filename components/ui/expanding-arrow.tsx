//Test

export function ExpandingArrow({ className }: { className?: string }) {
  return (
    <div className="relative flex items-center justify-end">
      <svg
        className={`${className ? className : 'h-4 w-4'}
            absolute opacity-50 transition-all group-hover:opacity-100`}
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path
          fillRule="evenodd"
          d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
        ></path>
      </svg>
    </div>
  )
}
