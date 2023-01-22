import React, {useState } from "react";
import '../css/navbar.css';


export default function Navbar() {

 // to change burger classes
 const setBurgerClass = useState("BurgerBar unclicked")
 const setMenuClass = useState("DropdownMenu hidden")
 const [isMenuClicked, setIsMenuClicked] = useState(false)

 // toggle burger DropdownMenu change
 const updateMenu = () => {
   if(!isMenuClicked) {
     setBurgerClass('BurgerBar clicked')
     setMenuClass('DropdownMenu visible')
   }
   else {
     setBurgerClass('BurgerBar unclicked')
     setMenuClass('DropdownMenu hidden')
   }
 }

  return (
    <>
    <div className='Nav'>
      <div className='NavContainer'>
        {/* This is the div that contains the navbar logo */}
        <div className='NavLogo'>
            <img className='NavIcon' src='./assets/hecologo.png' />
        </div>

        <div className='MobileIcon' onClick={() => updateMenu(setIsMenuClicked(!isMenuClicked))}>
          {(isMenuClicked?<i className='fas fa-xmark'/>:<i className='fas fa-bars-staggered'/>)}
        </div>

        {/* <div className='MobileIcon'>
         <i className='fas fa-bars-staggered'/>
        </div> */}

        {/* This div holds all the items in the navbar menu */}
        <div className='NavMenu'>
          <div className='NavItem'>
            <div className='NavLink'>
              Inputs
              {/* <i className='fas fa-caret-right' /> */}
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
              {/* <i className='fas fa-caret-right' /> */}
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
    <div className={(isMenuClicked?'DropdownMenu':'DropdownMenuHidden')}>
        <div className='DropdownMenuList'>
          <div className='DropdownMenuItem'>
            Inputs
          </div>
          <div className='DropdownMenuItem'>
            Results
          </div>
          <div className='DropdownMenuItem'>
            Model
          </div>
          <div className='DropdownMenuItem'>
            Team-based Learning
          </div>
        </div>
     </div>
  </>
  )
}
