import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class StravaAuth extends Component {


  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let path = `/bikes`;
    this.props.history.push(path);
  }

  componentDidMount(){
    return "Hello"
  }

  render() {
    return (

      <div className="container py-1">
        <h1 className="display-4">Click <a href='http://www.strava.com/oauth/authorize?client_id=40250&response_type=code&redirect_uri=http://localhost:3000/user&scope=read,activity:read,activity:read_all&approval_prompt=force'> HERE</a> to Authorize us to use your Strava data</h1>
        <div className="text-right mb-3">
        <button class="btn btn-primary btn-lg" onClick={this.handleSubmit}>Click here to view your Bikes</button>
        </div>
      </div>
    )
  }
}

export default StravaAuth
