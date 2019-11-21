import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import DropMenu from './DropMenu'

class AddParts extends React.Component {
    constructor(props) {
        super(props);
        const { bike } = props
        this.state = {
            comp_name: '',
            distance_done: (bike.distance_done / 1000),
            max_distance: '',
            bike_id: bike.id,
            start_distance: '',
            show_form: false,
            button_name: 'Add New Component',
            show_drop_down: false,
            show_rec: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.tyreChoice = this.tyreChoice.bind(this);
        this.wheelChoice = this.wheelChoice.bind(this);
        this.brakeChoice = this.brakeChoice.bind(this);
        this.groupChoice = this.groupChoice.bind(this);
        this.bracketChoice = this.bracketChoice.bind(this);
        this.noChoice = this.noChoice.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
      event.preventDefault();
      this.state.start_distance = (this.props.bike.distance_done - this.state.distance_done * 1000);

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
        if (this.state.button_name === "Add New Component"){
            this.setState({show_drop_down: true});
            this.setState({button_name: "Hide"})
        }
        else if (this.state.button_name === "Hide"){
            this.setState({show_drop_down: false});
            this.setState({button_name: "Add New Component"})
        }
        else if (this.state.button_name === ""){
            this.setState({show_form: false});
            this.setState({button_name: "Add New Component"});
            this.setState({show_rec: true})
        }
    }

    tyreChoice(event){
      event.preventDefault();
      this.setState({show_drop_down: false,});
      this.setState({button_name: ""});
      this.setState({comp_name: "Tyres"});
      this.setState({max_distance: "500"});
      this.setState({show_form: true})
    }

    wheelChoice(event){
      event.preventDefault();
      this.setState({show_drop_down: false,});
      this.setState({button_name: "", });
      this.setState({comp_name: "Wheel Rims"});
      this.setState({max_distance: "1000"});
      this.setState({show_form: true})
    }

    groupChoice(event){
      event.preventDefault();
      this.setState({show_drop_down: false,});
      this.setState({button_name: ""});
      this.setState({comp_name: "Group Set"});
      this.setState({max_distance: "2000"});
      this.setState({show_form: true})
    }

    brakeChoice(event){
      event.preventDefault();
      this.setState({show_drop_down: false,});
      this.setState({button_name: ""});
      this.setState({comp_name: "Brakes"});
      this.setState({max_distance: "1500"});
      this.setState({show_form: true})
    }

    bracketChoice(event){
      event.preventDefault();
      this.setState({show_drop_down: false,});
      this.setState({button_name: ""});
      this.setState({comp_name: "Bottom Bracket"});
      this.setState({max_distance: "2500"});
      this.setState({show_form: true})
    }

    noChoice(event){
      event.preventDefault();
      this.setState({show_drop_down: false,});
      this.setState({button_name: ""});
      this.setState({comp_name: ""});
      this.setState({max_distance: ""});
      this.setState({show_form: true});
      this.setState({show_rec: false})
    }

    render() {
        const style = this.state.show_form ? {} : {display: 'none'};
        const show_drop = this.state.show_drop_down ? {} : {display: 'none'};
        const hide_rec = this.state.show_rec ? {} : {display: 'none'};
        return (
            <div>
            <div className="container">
              <button className="btn btn-success btn-sm" onClick={this.toggleForm}>{this.state.button_name}</button>
              <div className="dropdown" style={show_drop}>
              <ul>
               <li><button onClick={this.tyreChoice} type="button" className="list-group-item list-group-item-action active">
               Tyres</button></li>
               <li><button onClick={this.wheelChoice} type="button" className="list-group-item list-group-item-action active">
               Wheel Rims</button></li>
               <li><button onClick={this.groupChoice} type="button" className="list-group-item list-group-item-action active">
               Group set</button></li>
               <li><button onClick={this.brakeChoice} type="button" className="list-group-item list-group-item-action active">
               Brakes</button></li>
               <li><button onClick={this.bracketChoice} type="button" className="list-group-item list-group-item-action active">
               Bottom Bracket</button></li>
               <li><button onClick={this.noChoice} type="button" className="list-group-item list-group-item-action active">
               Other</button></li>
                </ul>
              </div>
              <div style={style} >
                <div className="row">
                  <div className="col">
                    <h6>{this.props.bike.bike_name}: This bike has done a total of {this.props.bike.distance_done/1000} km</h6>
                    <form className="form-group" onSubmit={this.handleSubmit}>
                      <label>
                      Component name:&nbsp;
                      <input
                          className="form-control"
                        type="text"
                        name="comp_name"
                        value={this.state.comp_name}
                        onChange={this.handleChange} />
                      </label>
                      <br />
                      <label>
                      Distance done (km):&nbsp;
                      <input
                          className="form-control"
                        type="text"
                        name="distance_done"
                        value={this.state.distance_done}
                        onChange={this.handleChange} />
                      </label>
                      <br />
                      <label>
                      Maximum distance (km):&nbsp;
                      <input
                          className="form-control"
                          type="text"
                          name="max_distance"
                          value={this.state.max_distance}
                          onChange={this.handleChange} />
                      </label>
                      <div style={hide_rec} ><h5>The maximum recommended usage for {this.state.comp_name} is {this.state.max_distance} km</h5></div>
                      <br />
                      <input className="btn btn-primary btn-sm" type="submit" value="Submit" />
                      <button className="btn btn-danger btn-sm" onClick={this.toggleForm}>Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
              </div>
            </div>
        );
    }
}

export default AddParts;
