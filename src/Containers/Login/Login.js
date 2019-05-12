import React, { Component } from 'react';
import './Login.css'
import { throwStatement } from '@babel/types';
import Popup from '../../Layout/PopupModal/PopupModal';


class Login extends Component {
    state = {
        email: '',
        password: '',
        error: null,
        showPopup: 'false'
    }

    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    emailPasswordValidator = (email, password) => {
        if (email.includes('@') && email.includes('.')) {
            if (password.length > 5) {
                this.setState({
                    error: null
                })
                this.props.submit(email, password)
            } else {
                this.setState({
                    error: 'password'
                })
            }
        } else {
            this.setState({
                error: 'email'
            })
        }
    }


    render() {
        let error = <p></p>
        if (this.state.error) {
            error = this.state.error === 'email' ? <p>Please enter a valid email</p> :
                <p>Please enter a password with at least 6 character</p>
        }
        let popup = null
        if (this.state.showPopup===true) {
            popup = <Popup />
        }

        return (
            <React.Fragment>
                {popup}
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <form className="login100-form validate-form p-l-55 p-r-55 p-t-178" >
                                <span className="login100-form-title">
                                    Sign In
                        </span>
                                {error}

                                <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                                    <input className="input100" type="text" name="email" placeholder="Email" onChange={this.emailHandler} />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Please enter password">
                                    <input className="input100" type="password" name="pass" placeholder="Password" onChange={this.passwordHandler} />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="text-right p-t-13 p-b-23">
                                    <span className="txt1">
                                        Forgot
                            </span>

                                    <a href="#" className="txt2">
                                        Username / Password?
                            </a>
                                </div>

                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn" type="button"
                                        onClick={() => this.emailPasswordValidator(this.state.email, this.state.password)}>
                                        Sign in
                            </button>
                                </div>

                                <div className="flex-col-c p-t-170 p-b-40">
                                    <span className="txt1 p-b-9">
                                        Don’t have an account?
                            </span>

                                    <a href="#" className="txt3">
                                        Sign up now
                            </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>



        )
    }

}

export default Login;