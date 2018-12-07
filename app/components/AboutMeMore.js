// Import React components
import React from 'react'
import PropTypes from 'prop-types'

// Import custom components
import { Button } from './Button'

export class AboutMeMore extends React.Component {
  render () {
    return (
      <main className="aboutme-more">
        <div className="l-inner-wrapper aboutme-more-wrapper">
          <div className="aboutme-more-summary">
            <p>I got my start in a small marketing department with big needs, so I learned everything from print and video production to Flash animation. I fell in love with web development and haven’t looked back!</p>
            <p>I have a passion for learning new technologies and am currently embracing React, Angular, ES6, LESS/Sass, and all the related linters, package managers, and build tools.</p>
            <Button copy={'Back'} onclick={this.props.onClick} />
            <Button copy={'See my work'} onclick="/MyWork" />
          </div>
        </div>
      </main>
    )
  }
}

AboutMeMore.propTypes = {
  onClick: PropTypes.func.isRequired
}
