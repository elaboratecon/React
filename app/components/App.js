// Import React components
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'

// Import custom components
import Nav from './Nav'
import { AboutMe } from './AboutMe'
import { MyWork } from './MyWork'
import Contact from './Contact'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
  }

  render () {
    return (
      <Router>
        <div className='l-container'>
          <header className='header'>
            <div className='header__wrapper'>
              <Link to='/'>
                <img src="/assets/svg/logo.svg" alt='Jason Conover: Front End Developer' className='header--logo' />
              </Link>
              <Nav />
            </div>
          </header>
          <Switch>
            <Route exact path='/' component={AboutMe} />
            <Route exact path='/MyWork' component={MyWork} />
            <Route exact path='/Contact' component={Contact} />
            <Route render={function () {
              return <p>404 Error</p>
            }} />
          </Switch>
          <footer className='footer'>
            <p className='footer--copyright'>© 2017 Jason Conover, All Rights Reserved.</p>
            <p>
              <a href="mailto:JasonConover@outlook.com?subject=Online%20Portfolio">JasonConover@outlook.com</a>
            </p>
          </footer>
        </div>
      </Router>
    )
  }
}

export default App
