import React from 'react'
import Menu from '../images/menu.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <h1>Spring POS</h1>
        <img className='menu-icon' src={Menu} alt="menu" />
        <span className='plus-icon'>+</span>
      </div>
      <div className='nav-right'>
        <div className='user'>

        </div>
      </div>
    </div>
  )
}

export default Navbar
