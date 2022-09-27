import { useState, useEffect } from 'react'

const useMousePosition = () => {
   const [mousePositon, setMousePositon] = useState<{
      x: number
      y: number
   }>({ x: null!, y: null! })
   useEffect(() => {
      const updateMousePosition = (e: MouseEvent) => {
         setMousePositon({
            x: e.pageX,
            y: e.pageY,
         })
      }
      window.addEventListener('mousemove', updateMousePosition)
      return () => window.removeEventListener('mousemove', updateMousePosition)
   }, [])
   return mousePositon
}

export default useMousePosition
