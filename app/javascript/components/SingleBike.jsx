import React from "react";
import { Link } from "react-router-dom";

class SingleBike extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bike: { components: "" } };
  }

componentDidMount() {
  const {
    match: {
      params: { bike_id }
    }
  } = this.props;

  const url = `/api/v1/bikes/show/${bike_id}`;

  fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
      console.log(response)
    }
    throw new Error("Network response was not OK");
  })
  .then(response => this.setState({ bike: response}))
  .catch(() => this.props.history.push("/bikes"));
}

  render() {
      const { bike } = this.state;
      let componentList = "No bike components registered";
      console.log("hello")
      if (bike.components.length > 0) {
        componentList = bike.components
          .split(",")
          .map((component, index) => (
            <li key={index} className="list-group-item">
              {component}
            </li>
          ));
      }

      return (
        console.log("hello2")
        <div>
          <div className="hero position-relative d-flex align-items-center justify-content-center">
            <img
              src='https://www.decathlon.co.uk/media/837/8378535/big_1638914.jpg'
              className="img-fluid position-absolute"
            />
            <div className="overlay bg-dark position-absolute" />
            <h1 className="display-4 position-relative text-white">
              {bike.name}
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
            <Link to="/bikes" className="btn btn-link">
              Back to all bikes
            </Link>
          </div>
        </div>
      </div>
      )
    }
}

export default SingleBike;
