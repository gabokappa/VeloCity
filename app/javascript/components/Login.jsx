import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            token: 'test'
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
        console.log("HELLO IM IN THE HANDLE SUBMIT");
        let userData = this.state;
        console.log(userData);
        const body_test = JSON.stringify({"user": {
                "email": "james_holton@yahoo.co.uk",
                "password": "1"
            }
        })
        console.log(body_test);
        const url = "api/v1/tokens";
        let textStuff = ""
        fetch(url, {
            method: "POST",
            body: body_test,
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => response.text())
          .then(json => {console.log(json)});
    }

    render() {
        return (
            <form className="container py-1" onSubmit={this.handleSubmit}>
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
                <h1>{this.state.token}</h1>
            </form>
        );
    }
}

export default Login;
