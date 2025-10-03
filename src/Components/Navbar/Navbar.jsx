import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from  '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {
      const {getTotalCartItems} = useContext(ShopContext);
      const [menuOpen, setMenuOpen] = useState(false);
      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>DC-Luggage</p>
        </div>
        <div className="hambuger" onClick={toggleMenu}>
            =
        </div>
        <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
         
           <Link  style={{textDecoration:'none'}} to="/" > Home</Link>
           <Link  style={{textDecoration:'none'}} to="/mens">Men</Link>
           <Link  style={{textDecoration:'none'}} to="/womens">Women</Link>
           <Link  style={{textDecoration:'none'}} to="/accessorys">Accessory</Link>

           <Link to="/products">Products</Link>
          

        </ul>
        <div className="nav-login-cart">
        
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
