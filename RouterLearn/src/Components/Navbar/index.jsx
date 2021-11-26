import React from 'react';
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <>
    <div >
      <Link style={{margin: '10px'}} to='/'>Home</Link>
      <Link style={{margin: '10px'}} to='/services'>Services</Link>
      <Link style={{margin: '10px'}} to='/contact'>Contact</Link>
      <Link style={{margin: '10px'}} to='/aboutus'>About Us</Link>
      <Link style={{margin: '10px'}} to='/login'>Login</Link>
      </div>
    </>
  )
}

export default NavBar