import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StravaAuth from '../components/StravaAuth';
import Heading from '../components/Heading';
import User from '../components/User';
import Bikes from '../components/Bikes';
import SingleBike from '../components/SingleBike';
import Signup from '../components/Signup';
import Login from '../components/Login';

export default (
    <Router>
        <Heading />
        <Switch>
          <Route exact path="/" component={StravaAuth} />
          <Route exact path="/user" component={User} />
          <Route exact path="/bikes" component={Bikes} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/bike/:id" component={SingleBike} />
        </Switch>
    </Router>
);

// TODO check whether it should be exact path "/" component or <Route path="/recipes" exact component={Recipes} />
// TODO path="/bikes" means that because this isn't exact it path it will always load the component under that url
