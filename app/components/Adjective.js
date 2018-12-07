// Import React components
import React from 'react'

export class Adjective extends React.Component {
  constructor () {
    super()
    this.state = {
      adjIndex: 0
    }
  }

  nextAdj () {
    let next = this.state.adjIndex + 1
    if (next === this.props.array.length) next = 0
    this.setState({
      adjIndex: next
    })
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.nextAdj()
    }, 3000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      <span className="c-splash-adjective">{this.props.array[this.state.adjIndex]}</span>
    )
  }
}
