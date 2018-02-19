// Import React components
import React from 'react'
import { Link } from 'react-router-dom'

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
      <nav role='navigation' className='navbar'>
        <div className='menu-wrapper'>
          <input
            className='menu-toggle'
            type='checkbox'
            id='navCheck'
            checked={ this.state.isChecked }
            onChange={ this.handleChecked } />
          <span className='menu-toggle--tick'></span>
          <span className='menu-toggle--tick'></span>
          <span className='menu-toggle--tick'></span>
          <ul className='menu'>
            <li className='menu__item menu__item--active'><Link to='/'>About Me</Link></li>
            <li className='menu__item'><Link to='/MyWork'>My Work</Link></li>
            <li className='menu__item'><Link to='/Contact'>Contact Me</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
