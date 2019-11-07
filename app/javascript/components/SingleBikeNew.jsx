import React from "react";
import { Link } from "react-router-dom";
import BikePart from "./BikePart";
import BikeImage from "./BikeImage";
import ls from 'local-storage'
import AddParts from './AddParts'

class SingleBike extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bikeAndParts: null }
  };

  componentDidMount() {
    const url = `/api/v1/bikes/show?bike_id=${window.location.href.split("bike/")[1]}`;

    fetch(url, {
      method: 'GET',
      headers: {"Authorization": ls.get('authorization')}
    }).then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error("Network response was not OK");
    })
    .then(json => this.setState({bikeAndParts: JSON.parse(json) }))
    .catch((err) => console.log(err));
  };

  render() {

    const { bikeAndParts } = this.state;

    if (bikeAndParts) {
      let componentList = "No bike components registered";
      if (bikeAndParts.components.length > 0) {
        componentList = bikeAndParts.components.map((component, index) => (
          <li key={index}>
            <BikePart part={component} bike_distance={bikeAndParts.bike.distance_done}/>
          </li>
        ));
      }

      return (
        <div>
          <BikeImage frame_type={bikeAndParts.bike.frame_type} />
          <div><AddParts bike={bikeAndParts.bike} /></div>

          <Link to="/bikes">Back to all bikes</Link>
          <div>
            <h1>
              {bikeAndParts.bike.bike_name}
            </h1>
          </div>
          <div>
            <div>
              <div>
                <ul>
                  <h5>Bike Components</h5>
                  {componentList}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div> <p>WAIT!!!!</p> </div>
      )
    }
  }
}
export default SingleBike;
