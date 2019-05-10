import React from 'react';
import './NavigationBar.css'

const navBar = (props) => {
    return (
        <div className="nav-container">
            <a className="active">Home</a>
            <a>Sign in</a>
            <a>Sign up</a>
        </div>
    )
}

export default navBar;