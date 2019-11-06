import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ls from 'local-storage';

class Heading extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    ls.remove('authorization')
    ls.remove('user_id')
  }

  render() {
    return (
      <div className="jumbotron  p-1 sticky">
        <Link to="/bikes" className="btn btn-link">Home</Link>
        <Link to="/signup" className="btn btn-link">Sign Up</Link>
        <Link to="/login" className="btn btn-link">Login</Link>
        <Link to="/" className="btn btn-link" onClick={this.handleLogoutClick}>Logout</Link>
        <h1 className="display-1 text-center">
          <img className="img-thumbnail" src='https://myext.info/image/icon_large/kdemfmhkoncmbcphejembfngiihppkei.jpg'/>
          VeloCity
        </h1>
      </div>
    )
  }
}



export default Heading
