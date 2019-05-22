import React from 'react';
import './NavigationBar.css'

const navBar = (props) => {
    return (
        <div className="nav-container">
            <a onClick= {props.home} className="active">Home</a>
            <a onClick= {props.login}>Sign in</a>
            <a onClick = {props.about}>About</a>
        </div>
    )
}

export default navBar;