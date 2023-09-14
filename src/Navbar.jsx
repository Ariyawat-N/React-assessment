import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className='Navbar'>
      <h2><Link to={"/"}>Home</Link></h2>
      <h2><Link to={"/owner"}>Owner</Link></h2>
    </div>
  )
}
