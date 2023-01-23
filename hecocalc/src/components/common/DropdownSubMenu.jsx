import React from 'react'

function DropdownSubMenu() {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
            <li key={index} className="NavMenu">
                <Link 
                    className='dropdownlink'
                    activeClass='active'
                    to={submenu.scrollTo}
                    spy={true}
                    smooth={true}
                    duration={500}>
                    <p>{submenu.title}</p>
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default DropdownSubMenu
