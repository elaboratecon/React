// Import React components
import React, { useEffect } from 'react'

// Import custom components
import { Nasa } from './Nasa'
import { Adobe } from './Adobe'
import { Grindr } from './Grindr'
import { Tmobile } from './TMobile'
import { ReactJS } from './ReactJS'
import { AngularJS } from './AngularJS'
import { WordPress } from './WordPress'
import { Wyndham } from './Wyndham'
import { Microsoft } from './Microsoft'

export const MyWork = props => {

  useEffect(
    () => {
      const tilesContainer = document.querySelector('.tiles')
      const tiles = document.querySelectorAll('.tile')
      tiles.forEach((tile, i, arr) => {
        tilesContainer.appendChild(tile)
      })
    }
  )
  
  return (
    <div className="mywork-container">
      <Nasa />
      <Adobe />
      <Grindr />
      <Tmobile />
      <ReactJS />
      <AngularJS />
      <WordPress />
      <Microsoft />
      <Wyndham />
      <nav>
        <ul className="tiles"></ul>
      </nav>
    </div>
  )
}
