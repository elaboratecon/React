// Import React components
import React from 'react'

// Import custom components
import { AboutMeLeft } from './AboutMeLeft'
import { AboutMeRight } from './AboutMeRight'

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
      <div className='page-container'>
        <div className={'page-aboutme grid-container ' + (this.state.more ? 'more' : '')}>
          <AboutMeLeft onClick={this.handleMore} />
          <AboutMeRight onClick={this.handleBack} />
        </div>
      </div>
    )
  }
}
