// Import React components
import React from 'react'
import PropTypes from 'prop-types'

// Import custom components
import { Button } from './Button'
import { Adjective } from './Adjective'

const adjectives = [
  'Los Angeleno.',
  'crazy cat person.',
  'hot sauce collector',
  'house music junkie.'
]

export class AboutMeLeft extends React.Component {
  render () {
    return (
      <div className='page-aboutme grid-item left'>
        <h2>
          Hi. I’m Jason Conover,<br />
          Front End Developer &amp; <Adjective array={adjectives} />
        </h2>
        <Button copy={'A little more about me'} onclick={this.props.onClick} />
      </div>
    )
  }
}

AboutMeLeft.propTypes = {
  onClick: PropTypes.func.isRequired
}
