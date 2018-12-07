// Import React components
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

// Import custom components
import { Context } from './Context'

function Nav () {
  const { isChecked, setIsChecked } = useContext(Context)

  return (
    <nav role="navigation" className="nav">
      <div className="nav__menu-wrapper">
        <input
          className="nav__menu-toggle"
          type="checkbox"
          id="navCheck" 
          checked={isChecked} 
          onChange={ () => setIsChecked(isChecked === 'checked' ? '' : 'checked') } 
        />
        <span className="nav__menu-toggle--tick"></span>
        <span className="nav__menu-toggle--tick"></span>
        <span className="nav__menu-toggle--tick"></span>
        <ul className="menu">
          <li className="menu__item"><NavLink exact to="/" className="menu__item-link" activeClassName="menu__item-link--active">About Me</NavLink></li>
          <li className="menu__item"><NavLink exact to="/MyWork" className="menu__item-link" activeClassName="menu__item-link--active">My Work</NavLink></li>
          <li className="menu__item"><NavLink exact to="/Contact" className="menu__item-link" activeClassName="menu__item-link--active">Contact Me</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
