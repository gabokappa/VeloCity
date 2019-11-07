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

          <div class="container">
            <div class="row">
              <div class="span4"></div>
                <div class="span4">
                  <BikeImage frame_type={bikeAndParts.bike.frame_type} />
                </div>
              <div class="span4"></div>
            </div>
          </div>

          <div className="container py-1">
            <h1 className="display-4">{bikeAndParts.bike.bike_name}</h1>
            <p className="lead text-muted">
                Here are all of your tracked components
            </p>
            <div>
              <Link to={`/bikes`}>
                <button className="btn btn-success"> <button className="btn btn-success btn-sm">View all bikes</button></button>
              </Link>&nbsp;&nbsp;
              <button className="btn btn-success"><AddParts bike={bikeAndParts.bike} /></button>&nbsp;&nbsp;
            </div>
          </div>
          <br></br>

          <div>
            <main className="container">
              <div className="col-md-6 col-lg-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Component name:</h5>
                    {componentList}
                  </div>
                </div>
              </div>
            </main>
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
