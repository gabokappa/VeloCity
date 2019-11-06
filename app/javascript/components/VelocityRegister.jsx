import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import StravaAuth from './StravaAuth'
import Signup from './Signup'
import ls from 'local-storage'


class VelocityRegister extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const user_id = ls.get('user_id')
    let signup_style = {}
    let strava_style = {}

    if(user_id) {
      signup_style = {display: 'none'}
    } else {
      strava_style = {display: 'none'}
    }
    return (
      <div className="container py-1">
        <div style={signup_style}>
          <Signup />
        </div>
        <div style={strava_style}>
          <StravaAuth />
        </div>
      </div>
    )
  }
}

export default VelocityRegister
