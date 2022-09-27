import { useEffect, useState } from 'react'

const useMouseDirection = () => {
   const [mousePositon, setMousePositon] = useState<number>(0)
   const [mousePositonCache, setMousePositonCache] = useState<number>(0)
   const [direction, setDirection] = useState<number>(0)
   useEffect(() => {
      const updateMouseDirect = (e: MouseEvent) => {
         setMousePositon(e.pageX)
      }

      setDirection(mousePositon - mousePositonCache)
      setMousePositonCache(mousePositon)

      window.addEventListener('mousemove', updateMouseDirect)
      return () => window.removeEventListener('mousemove', updateMouseDirect)
   }, [mousePositon])

   return direction
}

export default useMouseDirection
