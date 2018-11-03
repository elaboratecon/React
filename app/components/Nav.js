// Import React components
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isChecked: false }
    this.handleChecked = this.handleChecked.bind(this)
  }

  handleChecked () {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render () {
    return (
      <nav role="navigation" className="nav">
        <div className="nav__menu-wrapper">
          <input
            className="nav__menu-toggle"
            type="checkbox"
            id="navCheck"
            checked={ this.state.isChecked }
            onChange={ this.handleChecked } />
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
}

export default Nav
