import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StravaAuth from '../components/StravaAuth';
import Heading from '../components/Heading';
import User from '../components/User';
import Bikes from '../components/Bikes';

export default (
    <Router>
        <Heading />
        <Switch>
        <Route exact path="/" component={StravaAuth} />
        <Route exact path="/user" component={User} />
        <Route exact path="/bikes" component={Bikes} />
        </Switch>
    </Router>
);

//TODO check whether it should be exact path "/" component or <Route path="/recipes" exact component={Recipes} />
//TODO path="/bikes" means that because this isn't exact it path it will always load the component under that url