import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StravaAuth from '../components/StravaAuth';
import Heading from '../components/Heading';
import User from '../components/User';

export default (
    <Router>
        <Heading />
        <Switch>
        <Route exact path="/" component={StravaAuth} />
        <Route exact path="/user" component={User} />
        </Switch>
    </Router>
);