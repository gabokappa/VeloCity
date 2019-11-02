import React from "react";
import { Link } from "react-router-dom";

/* eslint-disable no-alert, react/display-name */
export default () => (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="container secondary-color">
                <h1 className="display-4">VeloCity the new way to ride</h1>
                <p className="lead">
                    Track your bike components with ease to avoid accidents.
                </p>
                <hr className="my-4" />
                <Link
                    to="/authenticate"
                    className="btn btn-lg custom-button"
                    role="button"
                >
                    Connect to Strava
                </Link>
            </div>
        </div>
    </div>
);
/* eslint-enable no-alert, react/display-name */
