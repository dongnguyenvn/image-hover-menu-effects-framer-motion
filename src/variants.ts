import { Variants } from 'framer-motion'

type imageAnimateCustomArg = {
   elementHoverState: boolean
   mousePosition: {
      x: number
      y: number
   }
   menuItemPosition: {
      top: number
      left: number
   }
   mouseDirection: number
}

export const imgVariant: Variants = {
   init: {
      opacity: 0,
   },
   animate: ({
      elementHoverState,
      mousePosition,
      menuItemPosition,
      mouseDirection,
   }: imageAnimateCustomArg) => ({
      opacity: elementHoverState ? 1 : 0,
      x: mousePosition.x - menuItemPosition.left - 100,
      y: mousePosition.y - menuItemPosition.top - 140,
      zIndex: 1,
      rotate: mouseDirection > 3 ? 8 : mouseDirection < -3 ? -8 : 0,
      filter: `brightness(${
         mouseDirection > 3 || mouseDirection < -3 ? 1.5 : 1
      })`,
      transition: {
         ease: 'easeOut',
         rotate: {
            type: 'spring',
         },
      },
   }),
}
