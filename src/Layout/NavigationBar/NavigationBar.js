import React from 'react';
import './NavigationBar.css'

const navBar = (props) => {
    return (
        <div className="nav-container">
            <a onClick= {props.home} className="active">Home</a>
            <a onClick= {props.login}>Sign in</a>
            <a>Sign up</a>
        </div>
    )
}

export default navBar;