// Import React components
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Import custom components
import Nav from './Nav'
import { AboutMe } from './AboutMe'
import { MyWork } from './MyWork'
import Contact from './Contact'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path='/' exact component={AboutMe} />
            <Route path='/MyWork' exact component={MyWork} />
            <Route path='/Contact' exact component={Contact} />
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
