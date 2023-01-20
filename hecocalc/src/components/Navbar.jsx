import React from 'react';
import '../css/navbar.css';

function Navbar() {
  return (
    <div className='Nav'>
      <div className='NavContainer'>
        <div className='NavLogo'>
            <img className='NavIcon' src='./assets/hecologo.png' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
