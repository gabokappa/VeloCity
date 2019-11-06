import React from "react";
import { Link } from "react-router-dom";
import ls from 'local-storage';
import Image from './bicycle-breaks-professional-6946.jpg';

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
          })
          .then(redirect => {this.props.history.push('/bikes')})
        ;
    }

    render() {
        return (
          <div>
              <Link to="/signup" className="btn btn-link">New to VeloCity? Register here</Link>
              <div>
            <form className="form-group ml-5 px-2"onSubmit={this.handleSubmit}>
                <div className="form-group">
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
                <input className="btn btn-success" type="submit" value="Login" />
            </form>
              </div><div><img className="d-lg-inline" src={Image} alt={"welcome image"} /></div>
          </div>

        );
    }
}

export default Login;
