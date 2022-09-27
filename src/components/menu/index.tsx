import { FC } from 'react'
import { menuDatas } from '../../menuData'
import MenuItem from './MenuItem'

type MenuProps = {}

const Menu: FC<MenuProps> = () => (
   <nav className="menu">
      <div>
         {menuDatas.map((i) => (
            <MenuItem menuItemData={i} key={i.id} />
         ))}
      </div>
   </nav>
)

export default Menu
