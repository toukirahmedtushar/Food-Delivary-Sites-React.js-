import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-content">
            <h2>Your favourite food here. Order now</h2>
            <p>Order food from your favourite restaurants in your city. Choose from a wide range of cuisines and dishes.</p>
            <div className="header-buttons">
                <a href="#explore-menu"><button >View Menu</button></a>
                <button >Download App</button>
                </div>
        </div>

    </div>
  )
}

export default Header