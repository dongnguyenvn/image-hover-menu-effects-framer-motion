import { MutableRefObject, useEffect, useState } from 'react'

const usePositionElement = (elementRef: MutableRefObject<any>) => {
   const [elementHoverState, setElementHoverState] = useState(false)
   const [elementPosition, setElementPosition] = useState({
      top: 0,
      left: 0,
   })
   useEffect(() => {
      setElementPosition({
         top: elementRef.current.getBoundingClientRect().top,
         left: elementRef.current.getBoundingClientRect().left,
      })
   }, [elementHoverState])
   return { elementHoverState, setElementHoverState, elementPosition }
}

export default usePositionElement
