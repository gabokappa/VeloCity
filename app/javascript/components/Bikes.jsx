import React from "react";
import { Link } from "react-router-dom";

class Bikes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bikes: []
        };
    }

componentDidMount() {
    const url = "api/v1/bikes/index?user_id=1";
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ bikes: response }))
        // .catch(() => this.props.history.push("/"));
}

render() {
    const { bikes } = this.state;
    const allBikes = bikes.map((bike, index) => (
        <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
            <img
            src='https://www.decathlon.co.uk/media/837/8378535/big_1638914.jpg'
            className="card-img-top"
            alt={`${bike.name} image`}
            />
            <div className="card-body">
            <h5 className="card-title">Bike name: {bike.bike_name}</h5>
                <h5 className="card-title">Bike mileage: {bike.distance_done}</h5>
            <Link to={`/bike/${bike.id}`} className="btn custom-button">
            View Bike
            </Link>
            </div>
            </div>
            </div>
    ));

    const noBike = (
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
                No bikes yet. Why not <Link to="/new_bike">create one</Link>
            </h4>
        </div>
    );
    return (
        <>
            <section className="jumbotron jumbotron-fluid text-center">
                <div className="container py-5">
                    <h1 className="display-4">Bikes </h1>
                    <p className="lead text-muted">
                        Here are all of your bikes. Which one.
                    </p>
                </div>
            </section>
            <div className="py-5">
                <main className="container">
                    <div className="text-right mb-3">
                        <Link to="/bike" className="btn custom-button">
                            Add New Bike
                        </Link>
                    </div>
                    <div className="row">
                        {bikes.length > 0 ? allBikes : noBike}
                    </div>
                    <Link to="/" className="btn btn-link">
                        Home
                    </Link>
                </main>
            </div>
        </>
    );
}
}

export default Bikes;