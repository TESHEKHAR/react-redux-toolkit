import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <span className='logo'>React Redux ToolKit</span>
        <div>
            <Link className="navLink" to="/">Home</Link>
            <Link className="navLink" to="/cart">Cart</Link>
            
            <span className="cartCount">Cart Items: 0</span>
        </div>
    </div>
  )
}

export default Navbar