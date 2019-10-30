import React, { Component } from 'react'

class StravaAuth extends Component {

  render() {
    return (
      <div>
        <h2>click here to Authorize us to use your Strava data</h2>
        <br/>
        <a href='http://www.strava.com/oauth/authorize?client_id=40250&response_type=code&redirect_uri=http://localhost:3000/user&scope=read,activity:read,activity:read_all&approval_prompt=force'> Authorize</a>
      </div>
    )
  }
}

export default StravaAuth
