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

export class AboutMeSplash extends React.Component {
  render () {
    return (
      <main className="aboutme-splash">
        <div className="l-inner-wrapper aboutme-splash-wrapper">
          <h2 className="aboutme-splash__header">
            Hi. I’m Jason Conover,<br />
            Front End Developer<br />
            &amp; <Adjective array={adjectives} />
          </h2>
          <Button copy={'A little more about me'} onclick={this.props.onClick} classes='aboutme-splash__copy-cta' />
        </div>
      </main>
    )
  }
}

AboutMeSplash.propTypes = {
  onClick: PropTypes.func.isRequired
}
