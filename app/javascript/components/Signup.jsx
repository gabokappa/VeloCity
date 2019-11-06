import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import ls from 'local-storage';

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
        const value = target.value;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let userData = this.state;
        const url = "api/v1/signup/create";
        fetch(url, {
            method: "POST",
            body: JSON.stringify(userData),
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
            .then(json => {
              ls.set('user_id', json.id)
            })
            .then(reload => window.location.reload())
    }

    render() {
        return (
            <form className="form-group ml-5 px-2" onSubmit={this.handleSubmit}>
                <h2>Step 1/2 - Register for Velocity</h2>
                <div className="form-group">
                    <label> First name:
                        <input className="form-control"
                               type="text"
                               name="first_name"
                               value={this.state.first_name}
                               onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Surname:
                        <input className="form-control"
                               type="text"
                               name="sur_name"
                               value={this.state.sur_name}
                               onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input className="form-control"
                               type="email"
                               name="email"
                               value={this.state.email}
                               onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input className="form-control"
                               type="password"
                               name="password"
                               value={this.state.password}
                               onChange={this.handleChange} />
                    </label>
                    <br />
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        );
    }
}

export default Signup;
