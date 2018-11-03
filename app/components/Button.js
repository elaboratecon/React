// Import React components
import React from 'react'
import { Link } from 'react-router-dom'

export const Button = props => {
  if (typeof props.onclick === 'function') {
    return (
      <span className={'btn ' + props.classes} onClick={props.onclick}>{props.copy}</span>
    )
  } else {
    return (
      <Link className={'btn ' + props.classes} to={props.onclick}>{props.copy}</Link>
    )
  }
}
