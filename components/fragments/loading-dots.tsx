export function LoadingDots({ color = '#000' }: { color?: string }) {
  return (
    <span className="loading span">
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  )
}
