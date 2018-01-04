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
      <nav role='navigation'>
        <div className='menuToggle'>
          <input
            type='checkbox'
            id='navCheck'
            checked={ this.state.isChecked }
            onChange={ this.handleChecked } />
          <span></span>
          <span></span>
          <span></span>
          <ul className='menu'>
            <li><Link to='/'>About Me</Link></li>
            <li><Link to='/MyWork'>My Work</Link></li>
            <li><Link to='/Contact'>Contact Me</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
