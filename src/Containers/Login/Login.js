import React, { Component } from 'react';
import './Login.css'
import Firebase from "firebase";
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB8wHa2o_WyiF5Kawkn64DrDHhSHMZDKYo",
    authDomain: "bwish-926d0.firebaseapp.com",
    databaseURL: "https://bwish-926d0.firebaseio.com",
    projectId: "bwish-926d0",
    storageBucket: "bwish-926d0.appspot.com",
    messagingSenderId: "120094261556",
    appId: "1:120094261556:web:a62412640ec1e849"
};

class Login extends Component {
    state = {
        email : 'ahmed-tarek944@hotmail.com',
        password : '123456'
    }

   
   constructor(){
        super()
        Firebase.initializeApp(config);
        this.auth = Firebase.auth();
      
   

   }

   submit = () => {
       this.auth.signInWithEmailAndPassword(this.state.email,this.state.password)
       .then(response => {
           console.log(response)
       })
       .catch(error => {
           console.log(error.message)
       })
   }


    render() {

        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form p-l-55 p-r-55 p-t-178" >
                            <span className="login100-form-title">
                                Sign In
                        </span>

                            <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                                <input className="input100" type="text" name="username" placeholder="Username" />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Please enter password">
                                <input className="input100" type="password" name="pass" placeholder="Password" />
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
                                <button className="login100-form-btn" type = "button" onClick = {this.submit}>
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


        )
    }

}

export default Login;