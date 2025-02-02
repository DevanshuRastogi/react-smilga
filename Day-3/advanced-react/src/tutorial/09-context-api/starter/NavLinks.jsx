import React from 'react'
import UserContainer from './UserContainer'

const NavLinks = () => {
  return (
    <div className="nav-links">
        <a href="#" >Home</a>
        <a href="#" >About</a>
        <UserContainer   />
    </div>
  )
}

export default NavLinks