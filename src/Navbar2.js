import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <>
      <div id='div'>
        <NavLink to='/home'>   <p>Home</p> </NavLink>

        <NavLink to='/about'>     <p>About</p>  </NavLink>
        <NavLink to='/contact'>     <p>Contact</p>  </NavLink>

      </div>


    </>
  )
}

export default Navbar2