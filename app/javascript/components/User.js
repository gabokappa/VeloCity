import React, { Component } from 'react'
import queryString from 'query-string'

class User extends Component {

  /* eslint-disable no-alert, react/prop-types */
  render() {
    return (
      <div>
        <h2>Welcome James, what would you like to do</h2>
        <p>
          Your authcode e from Strava is : {queryString.parse(this.props.location.search).code}
        </p>
      </div>
    )
  }
}
/* eslint-enable no-alert, react/prop-types */

export default User
