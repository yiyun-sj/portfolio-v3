import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

export const useWindowHeight = () => {
  const [height, setHeight] = useState<number>()
  useEffect(() => {
    setHeight(window.innerHeight)
    window.addEventListener('resize', () => setHeight(window.innerHeight))
    return window.removeEventListener('resize', () =>
      setHeight(window.innerHeight)
    )
  }, [])
  return { height }
}
export const useIsMobile = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  useEffect(() => {
    setIsMobileDevice(isMobile)
  }, [])
  return { isMobile: isMobileDevice }
}
