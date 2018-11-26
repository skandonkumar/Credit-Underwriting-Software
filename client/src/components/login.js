import React from 'react';
import axios from 'axios';
import FadeTransition from "../helpers/fadeTransition";
import '../helpers/login.scss'
// const Login = () =>{
//     return(
//         <div>Login Form</div>
//     )
// }
//
// export default Login;

export default class MainLoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false,
            isChairpersonOpen: false
        };
    }

    showLoginBox() {
        this.setState({isLoginOpen: true, isRegisterOpen: false, isChairpersonOpen: false});
    }

    showRegisterBox() {
        this.setState({isRegisterOpen: true, isLoginOpen: false, isChairpersonOpen: false});
    }

    render() {
        return (
            <div className="root-container">
                <div className="box-controller">
                    <div
                        className={"controller " + (this.state.isLoginOpen
                            ? "selected-controller"
                            : "")}
                        onClick={this
                            .showLoginBox
                            .bind(this)}>
                        Login
                    </div>
                    <div
                        className={"controller " + (this.state.isRegisterOpen
                            ? "selected-controller"
                            : "")}
                        onClick={this
                            .showRegisterBox
                            .bind(this)}>
                        Register
                    </div>
                </div>

                <FadeTransition isOpen={this.state.isLoginOpen} duration={50}>
                    <div className="box-container">
                        <LoginBox/>
                    </div>
                </FadeTransition>
                <FadeTransition isOpen={this.state.isRegisterOpen} duration={50}>
                    <div className="box-container">
                        <RegisterBox/>
                    </div>
                </FadeTransition>
            </div>
        );
    }
}
class LoginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: "",
            success : false,
            error : ""
        };
    }

    onLoginUsernameChange(e) {
        this.setState({username: e.target.value,
            errors: ""});
    }

    onLoginPasswordChange(e) {
        this.setState({password: e.target.value,
            errors: ""});
    }


    submitLogin(e) {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/login", this.state)
            .then(result => {
                if(result.data.errors){
                    return this.setState({errors : result.data})
                }
                if (result.data.error){
                    return this.setState({
                        error : result.data.message
                    })
                }
                this.setState({
                    user_data : result.data,
                    errors: "",
                    success : true
                })
            })
    }

    render() {
        return (
            <div className="inner-container">
                <div className="header">
                    Login
                </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Username"
                            onChange={this
                                .onLoginUsernameChange
                                .bind(this)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password"
                            onChange={this
                                .onLoginPasswordChange
                                .bind(this)}
                        />
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={this
                            .submitLogin
                            .bind(this)}>Login
                    </button>

                    <small className="danger-error">{this.state.errors !== "" && this.state.errors.errors.username?this.state.errors.errors.username.msg:""}</small>
                    <small className="danger-error">{this.state.errors !== "" && this.state.errors.errors.password?this.state.errors.errors.password.msg:""}</small>
                    <small className="danger-error">{this.state.error !== ""?this.state.error:""}</small>
                </div>
            </div>
        );
    }

}

class RegisterBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            user_data: "",
            errors: "",
            success: false
        };
    }

    onUsernameChange(e) {
        this.setState({username: e.target.value});
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }

    onEmailChange(e) {
        this.setState({address: e.target.value});
    }

    submitRegister(e) {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/register", this.state)
            .then(result => {
                if (result.data.errors) {
                    return this.setState({errors: result.data})
                }
                return this.setState({
                    user_data: result.data,
                    errors: "",
                    success: true
                })
            })
    }

    render() {
        if (this.state.success === true) {
            alert("Successfully registered!");
        }
        return (
            <div className="inner-container">
                <div className="header">
                    Register
                </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            id="uname"
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Username"
                            onChange={this
                                .onUsernameChange
                                .bind(this)}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="pwd"
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password"
                            onChange={this
                                .onPasswordChange
                                .bind(this)}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            className="login-input"
                            placeholder="Email"
                            onChange={this
                                .onEmailChange
                                .bind(this)}/>
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={this
                            .submitRegister
                            .bind(this)}>Register
                    </button>
                    <small
                        className="danger-error">{this.state.errors !== "" && this.state.errors.errors.username ? this.state.errors.errors.username.msg : ""}</small>
                    <small
                        className="danger-error">{this.state.errors !== "" && this.state.errors.errors.address ? this.state.errors.errors.address.msg : ""}</small>
                    <small
                        className="danger-error">{this.state.errors !== "" && this.state.errors.errors.password ? this.state.errors.errors.password.msg : ""}</small>
                </div>
            </div>
        );
    }
}