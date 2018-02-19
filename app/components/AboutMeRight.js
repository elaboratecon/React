// Import React components
import React from 'react'
import PropTypes from 'prop-types'

// Import custom components
import { Button } from './Button'

export class AboutMeRight extends React.Component {
  render () {
    return (
      <div className='page-aboutme grid-item right'>
        <div className='summary'>
          <p>I got my start in a small marketing department with big needs, so I learned everything from print and video production to Flash animation. I fell in love with web development and haven’t looked back!</p>
          <p>I have a passion for learning new technologies and am currently embracing React, Angular, ES6, LESS/Sass, and all the related linters, package managers, and build tools.</p>
          <Button copy={'Back'} onclick={this.props.onClick} />
          <Button copy={'See my work'} onclick='/MyWork' />
        </div>
      </div>
    )
  }
}

AboutMeRight.propTypes = {
  onClick: PropTypes.func.isRequired
}
