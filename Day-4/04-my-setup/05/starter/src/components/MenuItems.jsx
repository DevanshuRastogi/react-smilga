import React from 'react'
import SingleMenu from './SingleMenu'

const MenuItems = ({menu , handleCat}) => {
 return<div className="section-center">
 {menu.map((oneMenu)=>(<SingleMenu key={oneMenu.id} handleCat={handleCat} {...oneMenu} />))}
 </div>
}

export default MenuItems