import React from "react";

class BikePartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bikeAndParts: null }
  };

  componentDidMount() {
    this.setState({ bikeAndParts: this.props })
  }

  render() {
    const { bikeAndParts } = this.state;
    if(bikeAndParts) {
      const bikeObject = this.state.bikeAndParts.bikeAndParts[0]
      const partsArray = this.state.bikeAndParts.bikeAndParts[1]
      const replaceNow = []
      const replaceSoon = []
      const replaceLater = []
      partsArray.forEach(function(part) {
        let usage = ( part.distance_done / part.max_distance ) * 100
        console.log(part.max_distance)
        console.log(part.distance_done)
        switch (true) {
          case (usage < 75):
            replaceLater.push(part);
            break;
          case (usage < 100):
            replaceSoon.push(part);
            break;
          case (usage >= 100):
            replaceNow.push(part);
            break;
        };
      });

      return (
        <div>
        <div>
        <br/><h5>Components stored: {partsArray.length}</h5></div>
        <div><h6 style={{ color: "red" }}>Need replacing: {replaceNow.length}</h6></div>
        <div><h6 style={{ color: "orange" }}>Replace soon: {replaceSoon.length}</h6></div>
        <div><h6 style={{ color: "green" }}>In good condition: {replaceLater.length}</h6></div>
        </div>
      )

    }
    else {
      return (
        <div>!!!!WAIT!!!!</div>
      )
    }
  }
}

export default BikePartSummary;
