// Import React components
import React from 'react'

// Import custom components
import { AboutMeSplash } from './AboutMeSplash'
import { AboutMeMore } from './AboutMeMore'

const menu = document.querySelector('.menu')

export class AboutMe extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      more: false
    }

    this.handleMore = this.handleMore.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  // Event Handlers
  handleMore () {
    console.log('MORE!')
    this.setState({
      more: true
    })
  }

  handleBack () {
    console.log('BACK!')
    this.setState({
      more: false
    })
  }

  render () {
    return (
      <div className={'l-page aboutme-container' + (this.state.more ? ' aboutme--slide-right' : '')}>
        <AboutMeSplash onClick={this.handleMore} />
        <AboutMeMore onClick={this.handleBack} />
      </div>
    )
  }
}
