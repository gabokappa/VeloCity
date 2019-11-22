import React from "react";
import { Link } from "react-router-dom";
import BikePart from './BikePart';
import BikePartSummary from './BikePartSummary';
import BikeImage from './BikeImage';
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
    const url = "api/v1/bikes/index?user_id="+ls.get('user_id');
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
        .catch((err) => console.log(err));
}

    refreshBikes = () => {
        var bike_ids = [];
        this.state.bikes.forEach(function(bike) {bike_ids.push(bike[0].strava_gear_id) } );
        const url = "api/v1/strava/refresh_bikes?bike_ids="+bike_ids+"&user_id="+ls.get("user_id");
        fetch(url, {
            method: 'POST',
            headers: {"Authorization": ls.get('authorization')}
        }).then(response => {
            if (!response.ok) {
                alert("You must be logged in");
                this.props.history.push('/login');
            }
        }).then(reload => window.location.reload())
    };

    getBikes = () => {
    const url = "api/v1/strava/find_bikes?user_id="+ls.get("user_id");
    fetch(url, {
    method: 'GET',
    headers: {"Authorization": ls.get('authorization')}
        }).then(response => {
            if (response.ok) {
                return response.json();

            }else{
            throw new Error("Network response was not ok.");
            }
        })
        .then(reload => window.location.reload())
    };
    // TODO - should really be refreshing the component, not the whole page

render() {
    const { bikes } = this.state;
    const allBikesAndParts = bikes.map((bikeAndParts, index) => (
        <div key={index} className="col-md-6 col-lg-4">
            <div className="card mb-4">
                <BikeImage frame_type={bikeAndParts[0].frame_type} />
                <div className="card-body">
                    <h5 className="card-title">Bike name: {bikeAndParts[0].bike_name}</h5>
                    <h5 className="card-title">Kilometers cycled: {Math.round(bikeAndParts[0].distance_done/1000)}</h5>
                    <Link to={`/bike/${bikeAndParts[0].id}`} className="btn custom-button bt-sx">
                        View Bike
                    </Link>
                    <div><BikePartSummary bikeAndParts={bikeAndParts} /></div>
                </div>
            </div>
        </div>
    ));

    const noBike = (
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <br/><h4>You have no Bikes, please click on Get Bikes to retrieve them from Strava</h4>
        </div>
    );
    return (
        <div>
            <div className="container py-1">
                <h1 className="display-4">Bikes </h1>
                <p className="lead text-muted">
                    Here are all of your bikes.
                </p>
                <div>
                    <button className="btn btn-success" onClick={this.refreshBikes}>Refresh Bikes</button>&nbsp;&nbsp;
                    <button className="btn btn-success" onClick={this.getBikes}>Get Bikes</button>
                </div>
            </div>
            <br></br>
            <div>
                <main className="container">
                    <div className="row">
                        {bikes.length > 0 ? allBikesAndParts : noBike}
                    </div>
                </main>
            </div>
        </div>
    );
}
}

export default Bikes;
