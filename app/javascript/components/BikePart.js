import React, { Component } from 'react'

class BikePart extends Component {
  
  render() {
    const { part } = this.props
    return (
      <div>Component: {part.comp_name} ({part.distance_done} / {part.max_distance})</div>
    )
  }
}

export default BikePart