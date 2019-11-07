import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class BikeImage extends Component {

  constructor(props) {
    super(props);
    const { frame_type } = props
  }

  render() {
    let bike_picture = ""
    switch (this.props.frame_type) {
      case 1:
        bike_picture = '/m-bike3.jpg'
        break;
      case 2:
        bike_picture = '/cross-bike.jpg'
        break;
      case 3:
        bike_picture = '/road-bike2.jpg'
        break;
      case 4:
        bike_picture = '/tt-bike.jpg'
        break;
    }

    return (
      <div>
        <img src={bike_picture} className="card-img-top"/>
      </div>
    )
  }
}

export default BikeImage
