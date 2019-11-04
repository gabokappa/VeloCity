import React, { Component } from "react";
import { Link } from "react-router-dom"

import CheckBox from '../components/CheckBox';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';

class FormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                first_name: '',
                sur_name: '',
                email: '',
                password: ''

            }
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleFullName = this.handleFullName.bind(this)
    }
    handleFormSubmit() {
        // TODO: Add submision logic here
    }

    handleClearForm() {
        // Logic for resetting the form
    }

    handleFullName(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newUser :
                {...prevState.newUser, name: value
                }
        }))
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleFormSubmit}>
                <Input /> {/* First Name */}
                <Input /> {/*Sur Name*/}
                <Input /> {/*Email*/}
                <Input /> {/*Password*/}
                <Button /> { /*Submit */}
                <Button /> {/* Clear the form */}
            </form>
        );
    }
}
export default FormContainer;
