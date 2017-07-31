import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render () {
    return (
      <ul className='nav'>
        <li><Link to='/'>About Me</Link></li>
        <li><Link to='/MyWork'>My Work</Link></li>
        <li><Link to='/Contact'>Contact Me</Link></li>
      </ul>
    )
  }
}

export default Nav
