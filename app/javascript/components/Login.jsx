import React from "react";
import { Link } from "react-router-dom";
import ls from 'local-storage';

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
        let userData = this.state;
        const body_test = JSON.stringify({"user": {
                "email": userData.email,
                "password": userData.password
            }
        })
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
          .then(json => {
                ls.set('authorization', JSON.parse(json).token)
                ls.set('user_id', JSON.parse(json).user_id)
          });
        
        this.props.history.push('/');
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
            </form>
        );
    }
}

export default Login;
