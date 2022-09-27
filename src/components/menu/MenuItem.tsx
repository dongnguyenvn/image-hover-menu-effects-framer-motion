import { motion } from 'framer-motion'
import { FC, useRef, MouseEventHandler } from 'react'
import useMouseDirection from '../../hooks/useMouseDirection'
import useMousePosition from '../../hooks/useMousePosition'
import usePositionElement from '../../hooks/usePositionElement'
import { MenuItemType } from '../../types'
import { imgVariant } from '../../variants'

type MenuItemProps = {
   menuItemData: MenuItemType
}

const MenuItem: FC<MenuItemProps> = ({ menuItemData }) => {
   const menuItemRef = useRef<HTMLAnchorElement>(null!)
   const menuItemTextRef = useRef<HTMLElement>(null!)
   const mouseDirection = useMouseDirection()

   const {
      elementHoverState,
      setElementHoverState,
      elementPosition: menuItemPosition,
   } = usePositionElement(menuItemRef)

   const mousePosition = useMousePosition()

   const handleOnMouseEnter: MouseEventHandler = () => {
      menuItemTextRef.current.style.zIndex = '999'
      setElementHoverState(true)
   }

   const handleOnMouseLeave: MouseEventHandler = () => {
      menuItemTextRef.current.style.zIndex = 'auto'
      setElementHoverState(false)
   }

   return (
      <a
         className="menu__item"
         ref={menuItemRef}
         onMouseEnter={handleOnMouseEnter}
         onMouseLeave={handleOnMouseLeave}
      >
         <span ref={menuItemTextRef} className="menu__item--text">
            <span className="menu__item--text-inner">{menuItemData.text.main}</span>
         </span>
         <motion.div
            initial="init"
            animate="animate"
            variants={imgVariant}
            custom={{
               elementHoverState,
               mousePosition,
               menuItemPosition,
               mouseDirection,
            }}
            className="hover-reveal"
         >
            <motion.div
               animate={{
                  scale: elementHoverState ? 1 : 0.3,
               }}
               transition={{
                  scale: {
                     duration: 0.55,
                     ease: [0.16, 1, 0.3, 1],
                  },
               }}
               className="hover-reveal__inner"
            >
               <motion.img
                  animate={{
                     scale: elementHoverState ? 1 : 2,
                  }}
                  transition={{
                     scale: {
                        duration: 0.55,
                        ease: [0.16, 1, 0.3, 1],
                     },
                  }}
                  className="hover-reveal__inner--img"
                  src={menuItemData.img}
                  alt={menuItemData.text.main}
               ></motion.img>
            </motion.div>
         </motion.div>
      </a>
   )
}

export default MenuItem
