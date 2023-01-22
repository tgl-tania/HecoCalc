import React from 'react';
import '../css/navbar.css';

function Navbar() {
  return (
    <div className='Nav'>
      <div className='NavContainer'>
        {/* This is the div that contains the navbar logo */}
        <div className='NavLogo'>
            <img className='NavIcon' src='./assets/hecologo.png' />
        </div>

        {/* This div holds all the items in the navbar menu */}
        <div className='NavMenu'>
          <div className='NavItem'>
            <div className='NavLink'>
              Inputs
            </div>
          </div>
          <div className='NavItem'>
            <div className='NavLink'>
              Results
            </div>
          </div>
          <div className='NavItem'>
            <div className='NavLink'>
              Model
            </div>
          </div>
        </div>

        {/* This is the div that contains the the buttons on the navbar */}
        <div className='NavBtnContainer'>
          <div className='NavBtn'>
            <div className='NavBtnLink'>
              Signup
            </div>
          </div>
          <div className='NavBtn'>
            <div className='NavBtnLink'>
              Login
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
