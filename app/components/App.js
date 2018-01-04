// Import React components
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import PropTypes from 'prop-types'

// Import custom components
import Nav from './Nav'
import { AboutMe } from './AboutMe'
import { MyWork } from './MyWork'
import Contact from './Contact'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='wrapper'>
          <header>
            <Nav />
          </header>
          <Switch>
            <Route exact path='/' component={AboutMe} />
            <Route exact path='/MyWork' component={MyWork} />
            <Route exact path='/Contact' component={Contact} />
            <Route render={function () {
              return <p>404 Error</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
