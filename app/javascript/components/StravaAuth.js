import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ls from 'local-storage'

class StravaAuth extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const stravaURL = 'http://www.strava.com/oauth/authorize?client_id=40250&response_type=code&redirect_uri=http://localhost:3000/api/v1/strava/authorize/' + ls.get("user_id") + '&scope=read,activity:read,activity:read_all&approval_prompt=force'
    return (
      <div className="container py-1">
      <h2>Step 2/2 - Authorise you Account with Strava</h2>
        Now that you have registered for our VeloCity App you need to Authorise your Strava account to allow us access to your bike information.
        Please click the button below, and follow the Strava instructions.
        You need to give us access to view both activity and private activity information
        <br/>
        <hr/>
        <a href={stravaURL}> Authorise STRAVA</a>
        <br/><br/>
        <input type="checkbox"/> Please click here to accept our T&C's
      </div>
    )
  }
}

export default StravaAuth
