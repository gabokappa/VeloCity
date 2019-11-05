import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class AddParts extends React.Component {
    constructor(props) {
        super(props);
        const { bike } = props
        this.state = {
            comp_name: '',
            distance_done: bike.distance_done,
            max_distance: '',
            bike_id: bike.id,
            start_distance: '0'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
      event.preventDefault();
      let partsData = this.state;
      const url = "/api/v1/components/create";
      fetch(url, {
          method: "POST",
          body: JSON.stringify(partsData),
          headers: {
              'Accept': "application/json",
              "Content-Type": "application/json"
          }
      }).then(response => {
          if (response.ok) {
              return response.json();
          }
          throw new Error("Network response was not ok.");
      })
          .then(reload => window.location.reload())
    }

    render() {

        return (
            <form className="container py-1" onSubmit={this.handleSubmit}>
                <label>
                    Component name:
                    <input
                        type="text"
                        name="comp_name"
                        value={this.state.comp_name}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Distance done:
                    <input
                        type="text"
                        name="distance_done"
                        value={this.state.distance_done}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Maximum distance:
                    <input
                        type="text"
                        name="max_distance"
                        value={this.state.max_distance}
                        onChange={this.handleChange} />
                </label>
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddParts;
