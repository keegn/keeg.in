import * as React from 'react'

const useMounted = () => {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])
  return mounted
}

export { useMounted }
