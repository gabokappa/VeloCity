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
              <li key={index} className="list-group-item">
                <BikePart part={component}/>
              </li>
            ));
        }

        return (
          <div>
            <BikeImage frame_type={bikeAndParts.bike.frame_type} />
            <div><AddParts bike={bikeAndParts.bike} /></div>

            <Link to="/bikes" className="btn btn-link">Back to all bikes</Link>
            <div className="overlay bg-dark position-absolute">
              <h1 className="display-4 position-relative text-white">
                {bikeAndParts.bike.bike_name}
              </h1>
            </div>
            <div className="container py-5">
              <div className="row">
                <div className="col-sm-12 col-lg-3">
                  <ul className="list-group">
                    <h5 className="mb-2">Bike Components</h5>
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
