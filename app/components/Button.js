// Import React components
import React from 'react'
import { Link } from 'react-router-dom'

export const Button = props => {
  if (props.type === 'url') {
    return (
      <Link className='button' to={props.onclick}>{props.copy}</Link>
    )
  } else {
    return (
      <span className='button' onClick={props.onclick}>{props.copy}</span>
    )
  }
}
