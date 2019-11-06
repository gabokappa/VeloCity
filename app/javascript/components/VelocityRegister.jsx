import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import StravaAuth from './StravaAuth'
import Signup from './Signup'


class VelocityRegister extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container py-1">
        <Signup />
        <StravaAuth />
      </div>
    )
  }
}

export default VelocityRegister
