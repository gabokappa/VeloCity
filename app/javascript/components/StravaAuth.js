import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class StravaAuth extends Component {


  constructor(props) {
    super(props);
    this.state = {
      newBikes: []
  };
  }

  getBikes = () => { 
      const url = "api/v1/strava/find_bikes";
      fetch(url)
          .then(response => {
              if (response.ok) {
                  return response.json();
              }
              throw new Error("Network response was not ok.");
          })
          .then(response => {console.log(response)})
          .then(response => this.setState({ newBikes: response }))
      }

  viewBikes = () => {
    this.props.history.push('/bikes');
  }

  componentDidMount(){
    return "Hello"
  }

  render() {
    return (

      <div className="container py-1">
        <h1 className="display-4">Click <a href='http://www.strava.com/oauth/authorize?client_id=40250&response_type=code&redirect_uri=http://localhost:3000/api/v1/strava/authorize&scope=read,activity:read,activity:read_all&approval_prompt=force'> HERE</a> to Authorize us to use your Strava data</h1>
        <div className="text-right mb-3">
        <button className="btn btn-primary btn-lg" onClick={this.viewBikes}>Click here to view your Bikes</button>
        </div><br/>
        <div><button className="btn btn-primary btn-lg" onClick={this.getBikes}>Get Bikes</button>
        </div>
      </div>
    )
  }
}

export default StravaAuth
