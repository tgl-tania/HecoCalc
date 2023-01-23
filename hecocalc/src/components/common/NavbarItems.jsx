import React from 'react'
import SubDropdown from './SubDropdownMenu';
import { useState, useEffect, useRef } from "react";



const NavbarItems = ({items}) => {
  const [subDropdown, setSubDropdown] = useState(false);
  let ref = useRef();
  useEffect(() => {
    const handler = (event) => {
     if (subDropdown && ref.current && !ref.current.contains(event.target)) {
      setSubDropdown(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [subDropdown]);


  return (
      <li className="navbar__items" ref={ref}>
        {items.submenu ? (
          <>
            <button 
              type='button' 
              aria-haspopup="menu"
              aria-expanded={subDropdown ? "true" : "false"}
              onClick={() => setSubDropdown((prev) => !prev)}
            >
              {items.title}{" "}
            </button>
            <SubDropdown
              submenus={items.submenu}
              subDropdown={subDropdown}
            />
          </>
        ) : (
          <div 
            activeClass='active'
            spy={true}
            smooth={true}
            duration={500}>
            <p>{items.title}</p>
          </div>
        )}
      </li>
  )
};

export default NavbarItems;