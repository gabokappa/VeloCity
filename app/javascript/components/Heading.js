import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ls from 'local-storage';


class Heading extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = {isLoggedIn: false}
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true})
    .then(() => {
      this.props.history.push("/login")
    })
  }

  handleLogoutClick() {
    ls.remove('authorization')
    ls.remove('user_id')
    this.setState({isLoggedIn: false})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <div> <button className="btn btn-primary btn-lg" onClick={this.handleLogoutClick}>Logout</button></div>
    } else {
      button = <Link to="/login" className="btn btn-link" onClick={this.handleLoginClick}>Login</Link>
    }

    return (
      <div className="jumbotron  p-1">
        <Link to="/" className="btn btn-link">Home</Link>
        {button}
        <h1 className="display-1 text-center">
          <img className="img-thumbnail" src='https://myext.info/image/icon_large/kdemfmhkoncmbcphejembfngiihppkei.jpg'/>
          VeloCity Application
        </h1>
      </div>
    )
  }
}



export default Heading
