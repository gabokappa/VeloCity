import React from "react";
import { Link } from "react-router-dom";
import BikePart from './BikePart';
import ls from 'local-storage';

class Bikes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bikes: [],
            refresh: false
        };
    }

componentDidMount() {
    const url = "api/v1/bikes/index?user_id="+ls.get('user_id')
    fetch(url, {
        method: 'GET',
        headers: {"Authorization": ls.get('authorization')}
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
            alert("You must be logged in")
            this.props.history.push('/login');
        })
        .then(response => this.setState({ bikes: response }))
}

    refreshBikes = () => {
        var bike_ids = [];
        console.log(this.state.bikes);
        this.state.bikes.forEach(function(bike) {bike_ids.push(bike[0].strava_gear_id) } )
        const url = "api/v1/strava/refresh_bikes?bike_ids="+bike_ids+"&user_id="+ls.get("user_id");
        fetch(url, {
            method: 'POST',
            headers: {"Authorization": ls.get('authorization')}
        }).then(response => {
            if (!response.ok) {
                alert("You must be logged in")
                this.props.history.push('/login');
            }
        }).then(reload => window.location.reload())
    }
    // TODO - should really be refreshing the component, not the whole page

render() {
    const { bikes } = this.state;

    const allBikesAndParts = bikes.map((bikeAndParts, index) => (
        <div key={index} className="col-md-6 col-lg-4">
            <div className="card mb-4">
                <img
                src='https://www.decathlon.co.uk/media/837/8378535/big_1638914.jpg'
                className="card-img-top"
                alt={`${bikeAndParts[0].name} image`}/>
                <div className="card-body">
                    <h5 className="card-title">Bike name: {bikeAndParts[0].bike_name}</h5>
                    <h5 className="card-title">Bike mileage: {bikeAndParts[0].distance_done}</h5>
                    <ul>
                        {bikeAndParts[1].map((part) => {
                        return <li><BikePart part={part} /></li>
                        })}
                    </ul>

                    <Link to={`/bike/${bikeAndParts[0].id}`} className="btn custom-button">
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
        <div>
            <div className="container py-1">
                <h1 className="display-4">Bikes </h1>
                <p className="lead text-muted">
                    Here are all of your bikes. Which one.
                </p>
                <div> <button className="btn btn-primary btn-lg" onClick={this.refreshBikes}>Refresh Bikes</button></div>
            </div>

            <div>
                <main className="container">
                    <div className="row">
                        {bikes.length > 0 ? allBikesAndParts : noBike}
                    </div>
                    <div className="text-right mb-3">
                        <Link to="/bike" className="btn custom-button">
                            Add New Bike
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}
}

export default Bikes;
