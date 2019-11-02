import React, { Component } from 'react'

class BikePart extends Component {

/* eslint-disable no-alert, react/prop-types */
  render() {
    const { part } = this.props
    return (
      <div>Component: {part.comp_name} ({part.distance_done} / {part.max_distance})</div>
    )
  }
}
/* eslint-enable no-alert, react/prop-types */
export default BikePart
