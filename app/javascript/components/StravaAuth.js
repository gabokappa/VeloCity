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
        <h1 className="display-4">Click <a href={stravaURL}> HERE</a> to Authorize us to use your Strava data</h1>
      </div>
    )
  }
}

export default StravaAuth
