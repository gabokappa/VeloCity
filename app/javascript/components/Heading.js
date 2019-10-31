import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Heading extends Component {

  render() {
    return (
      <div className="jumbotron  p-1">
        <Link to="/" className="btn btn-link">Home</Link>
        <h1 className="display-1 text-center">
          <img className="img-thumbnail" src='https://myext.info/image/icon_large/kdemfmhkoncmbcphejembfngiihppkei.jpg'/>
          VeloCity Application
        </h1>
      </div>
    )
  }
}



export default Heading