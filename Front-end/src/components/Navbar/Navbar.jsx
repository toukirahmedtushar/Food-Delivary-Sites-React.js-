import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu] = React.useState('home');
  return (
    
    <div className='navbar'>
        <img src={assets.logo} alt="Logo" className='logo' />
        <div className="navbar-menu">
            <ul>
                <Link to='/' onClick={()=>setMenu('home')} className={menu==="home"?"active":""}>Home</Link>
                <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==="menu"?"active":""}>Menu</a>
                <a href='#' onClick={()=>setMenu('mobile-app')} className={menu==="mobile-app"?"active":""}>Mobile app</a>
                <a href='#footer' onClick={()=>setMenu('contract')} className={menu==="contract"?"active":""}>Contact</a>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-basket">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button >Login</button>
        </div>

    </div>
    
  )
}

export default Navbar