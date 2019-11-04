import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            sur_name: '',
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value
        this.setState({[name]: value});
    }

    handleSubmit(event) {
      event.preventDefault();
      console.log("HELLO IM IN THE HANDLE SUBMIT");
      let userData = this.state;
      console.log(userData);
      const url = "api/v1/signup/create";
      fetch(url, {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
              'Accept': "application/json",
              "Content-Type": "application/json"
          }
      }).then(response =>  {<Redirect to='/login' />})
    }

    render() {
        return (
            <form className="container py-1" onSubmit={this.handleSubmit}>
                <label>
                    First name:
                    <input
                        type="text"
                        name="first_name"
                        value={this.state.first_name}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Surname:
                    <input
                        type="text"
                        name="sur_name"
                        value={this.state.sur_name}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Signup;
