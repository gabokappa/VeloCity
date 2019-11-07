import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import DropDownMenu from './DropDownMenu'
import DropMenu from './DropMenu'

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
            button_name: 'Add New Component',
            show_drop_down: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.tyreChoice = this.tyreChoice.bind(this);
        this.wheelChoice = this.wheelChoice.bind(this);
        this.brakeChoice = this.wheelChoice.bind(this);
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
        if (this.state.show_drop_down){
            this.setState({show_drop_down: false});
            this.setState({button_name: "Add New Component"})
            this.setState({show_form: false});
        }else{
            this.setState({show_drop_down: true});
            this.setState({button_name: "Hide"})
        }

        console.log(this.state.show_form)
    }

    tyreChoice(event){
      event.preventDefault();
      this.setState({show_drop_down: false,})
      this.setState({button_name: "Add New Component"})
      this.setState({comp_name: "Bike tyres"})
      this.setState({max_distance: "500"})
      this.setState({show_form: true})
    }

    wheelChoice(event){
      event.preventDefault();
      this.setState({show_drop_down: false,})
      this.setState({button_name: "Add New Component"})
      this.setState({comp_name: "Wheel Rims"})
      this.setState({max_distance: "1000"})
      this.setState({show_form: true})
    }

    groupChoice(event){
      event.preventDefault();
      this.setState({show_drop_down: false,})
      this.setState({button_name: "Add New Component"})
      this.setState({comp_name: "Group Set (Gears and Cogs)"})
      this.setState({max_distance: "2000"})
      this.setState({show_form: true})
    }

    brakeChoice(event){
      event.preventDefault();
      this.setState({show_drop_down: false,})
      this.setState({button_name: "Add New Component"})
      this.setState({comp_name: "Brakes"})
      this.setState({max_distance: "1500"})
      this.setState({show_form: true})
    }

    bracketChoice(event){
      event.preventDefault();
      this.setState({show_drop_down: false,})
      this.setState({button_name: "Add New Component"})
      this.setState({comp_name: "Bottom Bracket"})
      this.setState({max_distance: "2500"})
      this.setState({show_form: true})
    }

    noChoice(event){
      event.preventDefault();
      this.setState({show_drop_down: false,})
      this.setState({button_name: "Add New Component"})
      this.setState({comp_name: ""})
      this.setState({max_distance: ""})
      this.setState({show_form: true})
    }

    render() {
        const style = this.state.show_form ? {} : {display: 'none'}
        const show_drop = this.state.show_drop_down ? {} : {display: 'none'}
        return (
            <div>
            <div className="container">
              <button onClick={this.toggleForm}>{this.state.button_name}</button>
              <div className="dropdown" style={show_drop}>
              <ul>
               <li><button onClick={this.tyreChoice} type="button" className="list-group-item list-group-item-action active">
               Tyres</button></li>
               <li><button onClick={this.wheelChoice} type="button" className="list-group-item list-group-item-action active">
               Wheels</button></li>
               <li><button onClick={this.groupChoice} type="button" className="list-group-item list-group-item-action active">
               Group set (chain + cogs)</button></li>
               <li><button onClick={this.brakeChoice} type="button" className="list-group-item list-group-item-action active">
               Brake pads</button></li>
               <li><button onClick={this.bracketChoice} type="button" className="list-group-item list-group-item-action active">
               Bottom Bracket</button></li>
               <li><button onClick={this.noChoice} type="button" className="list-group-item list-group-item-action active">
               Other</button></li>
                </ul>
              </div>
              <div style={style} >
                <div className="row">
                  <div className="col">
                    <form className="container" onSubmit={this.handleSubmit}>
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
              </div>
              </div>
            </div>
        );
    }
}

export default AddParts;
