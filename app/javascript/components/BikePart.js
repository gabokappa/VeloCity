import React, { Component } from 'react'
import ls from 'local-storage';

class BikePart extends Component {
  constructor(props) {
    super(props);
    const { part } = props
    // this.state = {id: ""}
    this.deletePart = this.deletePart.bind(this);
  }

    deletePart(event) {
      if(confirm("Are you sure you wish to delete?") === true) {
        const url = `/api/v1/components/destroy?comp_id=${this.props.part.id}`;
        fetch(url, {
          method: 'GET',
          headers: {"Authorization": ls.get('authorization')}
            })
          .then(response => {
            if (response.ok) {
              console.log(response)
            }else{
              throw new Error("Network response was not ok.");
              }
            })
            .then(reload => window.location.reload())
      }
    }

  render() {
    const { part } = this.props
    const { bike_distance } = this.props
    const distance_done = bike_distance - part.start_distance
    const max_distance = part.max_distance * 1000

    function percentWorn(part) {
      return (( distance_done / max_distance ) * 100).toFixed()
    }

    function wornColour(part) {
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
    <div>
      <div style={wornColour(part)}>Component: {part.comp_name} <br/>
      Distance done:{(distance_done/1000).toFixed()}Km <br/>
      Recommended maximum: {(part.max_distance).toFixed()}Km<br/>
      Percentage worn: { percentWorn(part) }%</div>
      <div>
      <button onClick={this.deletePart}>Delete</button></div>
    </div>
  )};
}

export default BikePart
