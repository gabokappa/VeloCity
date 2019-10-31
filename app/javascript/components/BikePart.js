import React, { Component } from 'react'
import queryString from 'query-string'

class BikePart extends Component {
  componentDidMount() {
    // Needs an API call or something here.
  }
  
  render() {
    const { part } = this.props
    return (
      <div>Component: {part.comp_name} ({part.distance_done} / {part.max_distance})</div>
    )
  }
}

export default BikePart