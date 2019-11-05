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
      <div className="jumbotron  p-1">
        <Link to="/" className="btn btn-link">Home</Link>
        <div> <button className="btn btn-primary btn-lg" onClick={this.handleLogoutClick}>Logout</button></div>
        <h1 className="display-1 text-center">
          <img className="img-thumbnail" src='https://myext.info/image/icon_large/kdemfmhkoncmbcphejembfngiihppkei.jpg'/>
          VeloCity Application
        </h1>
      </div>
    )
  }
}



export default Heading
