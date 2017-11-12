// Import React components
import React from 'react'

// Import custom components
import api from '../utils/api'
import { Button } from './Button'
import { Adjectives } from './Adjectives'

let adjIndex = 0

export class AboutMe extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 1
    }
  }

  populatePageContent () {
    // Request Page Data: About Me
    api.fetchPageData(0)
      .then(function (pageData) {
        this.setState({
          page_name: pageData.page_name,
          blurb_start: pageData.blurb_start,
          adjectives: pageData.adjectives,
          cta_more: pageData.cta_more,
          cta_back: pageData.cta_back,
          cta_mywork: pageData.cta_mywork,
          summary: pageData.summary,
          curr_adj: pageData.adjectives[adjIndex]
        })
      }.bind(this))
  }

  nextAdj () {
    let next = adjIndex + 1
    if (next === this.state.adjectives.length) {
      next = 0
    }
    adjIndex = next
    this.setState({
      curr_adj: this.state.adjectives[adjIndex]
    })
  }

  // Event Handlers
  more () {
    console.log('MORE!')
  }
  back () {
    console.log('BACK!')
  }

  componentDidMount () {
    this.populatePageContent()

    this.interval = setInterval(function () {
      this.nextAdj()
    }.bind(this), 3000)
  }

  componentWillUnmount (prevProps, prevState) {
    clearInterval(this.interval)
  }

  render () {
    return (
      <div className='home-container'>
        <div className='left'>
          <h2>
            {this.state.blurb_start}&nbsp;
            <Adjectives curr_adj={this.state.curr_adj} />
          </h2>
          <Button copy={this.state.cta_more} onclick={this.more} />
        </div>
        <div className='right'>
          <div className='summary'>
            {this.state.summary}
            <Button copy={this.state.cta_back} onclick={this.back} />
            <Button copy={this.state.cta_mywork} onclick='/MyWork' type='url' />
          </div>
        </div>
      </div>
    )
  }
}
