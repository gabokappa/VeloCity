import React, { Component } from 'react'

class BikePart extends Component {

  render() {
    const { part } = this.props
    function percentWorn(part) {
      return (( part.distance_done / part.max_distance ) * 100).toFixed()
    }

function wornColour(part) {
      console.log("called")
      if(percentWorn(part) < 75) {
        return {backgroundColor: "green"}
      }
      else if(percentWorn(part) < 100) {
        return {backgroundColor: "orange"}
      }
      else {
        return {backgroundColor: "red"}
    };
  };

    return (
      <div style={wornColour(part)}>Component: {part.comp_name} <br/>
      Distance done:{part.distance_done}m <br/>
      Recommended maximum: {part.max_distance}m <br/>
      Percentage worn: { percentWorn(part) }%</div>
    )
  }
}

export default BikePart
