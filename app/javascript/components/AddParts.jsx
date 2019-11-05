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
            start_distance: '0',
            show_form: false,
            button_name: 'Add New Component'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
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

    toggleForm(event){
        event.preventDefault();
        if (this.state.show_form){
            this.setState({show_form: false});
            this.setState({button_name: "Add New Component"})
        }else{
            this.setState({show_form: true});
            this.setState({button_name: "Hide"})
        }
        
        console.log(this.state.show_form)
    }

    render() {
        const style = this.state.show_form ? {} : {display: 'none'}
        return (
            <div>
            <button onClick={this.toggleForm}>{this.state.button_name}</button>
            <div style={style}>
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
            </div>
            </div>
        );
    }
}

export default AddParts;
