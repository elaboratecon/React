// Import React components
import React from 'react'

export const Button = props => (
  <button type='button' onClick={props.onclick}>{props.copy}</button>
)
