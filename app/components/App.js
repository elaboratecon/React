// Import React components
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'

// Import custom components
import { Context } from './Context'
import Nav from './Nav'
import { AboutMe } from './AboutMe'
import { MyWork } from './MyWork'
import Contact from './Contact'
import logo from '../assets/svg/logo.svg'

import AppContainer from './AppContainer'

function App() {
  const [ isChecked, setIsChecked ] = useState('')

  const contextValue = {
    isChecked: isChecked,
    setIsChecked: setIsChecked
  }
  
  return (
    <Router>
      <Context.Provider value={contextValue}>
        <AppContainer>
          <header className="header">
            <div className="l-inner-wrapper">
              <Link to="/">
                <img src={logo} alt="Jason Conover: Front End Developer" className="header__logo" />
              </Link>
                <Nav />
            </div>
          </header>
          <div className="l-page-container">
            <Switch>
              <Route exact path="/" component={AboutMe} />
              <Route exact path="/MyWork" component={MyWork} />
              <Route exact path="/Contact" component={Contact} />
              <Route render={() => <p>404 Error</p>} />
            </Switch>
          </div>
          <footer className="footer">
            <p className="footer__copyright">© 2018 Jason Conover, All Rights Reserved.</p>
            <p className="footer__email"><a href="mailto:JasonConover@outlook.com?subject=Online%20Portfolio">JasonConover@outlook.com</a></p>
          </footer>
        </AppContainer>
      </Context.Provider>
    </Router>
  )
}

export default App
