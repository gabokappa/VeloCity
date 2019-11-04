// import React, from 'react';
// import { Link } from "react-router-dom";
//
// // import CheckBox from '../components/CheckBox';
// import Input from './Input';
// // import Select from '../components/Select';
// import Button from './Button';
//
// class FormContainer extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             newUser: {
//                 first_name: '',
//                 sur_name: '',
//                 email: '',
//                 password: ''
//
//             }
//         }
//         this.handleFormSubmit = this.handleFormSubmit.bind(this);
//         // this.handleClearForm = this.handleClearForm.bind(this);
//         this.handleFullName = this.handleFullName.bind(this)
//     }
//     handleFormSubmit(e) {
//        e.preventDefault();
//        let userData = this.state.newUser;
//        // TODO: Change the below call to work with the API
//         fetch("http://example.com", {
//             method: "POST",
//             body: JSON.stringify(userData),
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json"
//             }
//         }).then(response => {
//             response.json().then(data => {
//                 console.log("Successful" + data);
//             });
//         });
//     }
//
//     }
//
// handleFullName(e) {
//     let value = e.target.value;
//     this.setState(
//         prevState => ({
//             newUser: {
//                 ...prevState.newUser,
//                 name: value
//             }
//         }),
//         () => console.log(this.state.newUser)
//     );
// }
//
// handleInput(e) {
//     let value = e.target.value;
//     let name = e.target.name;
//     this.setState(
//         prevState => ({
//             newUser: {
//                 ...prevState.newUser,
//                 [name]: value
//             }
//         }),
//         () => console.log(this.state.newUser)
//     );
// }
//
//     render() {
//         return (
//             <form className="container" onSubmit={this.handleFormSubmit}>
//                 <Input
//                 inputType={"text"}
//                 title={"First Name"}
//                 name={"first_name"}
//                 value={this.state.newUser.first_name}
//                 placeholder={"Enter your name"}
//                 handleChange={this.handleInput}
//                 /> {" "}
//                 {/* First Name */}
//                 <Input
//                 inputType={"text"}
//                 title={"Sur Name"}
//                 name={"sur_name"}
//                 value={this.state.newUser.sur_name}
//                 placeholder={"Enter your surname"}
//                 handleChange={this.handleInput}
//                 />{" "}
//                 {/*Sur Name*/}
//                 <Input
//                     inputType={"text"}
//                     title={"Email"}
//                     name={"email"}
//                     value={this.state.newUser.email}
//                     placeholder={"Enter your email"}
//                     handleChange={this.handleInput}
//                 />{" "}
//                 /> {/*Email*/}
//                 <Input
//                     inputType={"text"}
//                     title={"Password"}
//                     name={"password"}
//                     value={this.state.newUser.password}
//                     placeholder={"Enter your password"}
//                     handleChange={this.handleInput}
//                 />{" "}
//                 {/*Password*/}
//                 <Button
//                 action={this.handleFormSubmit}
//                 type={"primary"}
//                 title={"Submit"}
//                 style={buttonStyle}
//                 />{" "}
//                 { /*Submit */}
//                 {/*<Button /> /!* Clear the form *!/*/}
//             </form>
//         );
// }
//
// const buttonStyle = {
//     margin: "10px 10px 10px 10px"
// };
//
// export default FormContainer;
