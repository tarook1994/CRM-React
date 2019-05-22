import React from 'react';
import './PopupModal.css'
import myimage from '../../Assets/Images/me.jpg'
import android from '../../Assets/Images/android.png'
import react from '../../Assets/Images/react.png'
import spring from '../../Assets/Images/spring.png'
import mysql from '../../Assets/Images/mysql.png'

const popup = (props) => {
    let displayed = <div>
        <p>{props.message}</p>
    </div>
    if (props.isAbout) {
        displayed = <div className="card">
            <div style={{ backgroundColor: 'black' }}>
                <img src={myimage} alt="John"  />

            </div>
            <p className="name">Ahmed Tarek</p>
            <p className="title">Web & Android Developer</p>
            <div style={{ margin: '10px 0' }}>
                <img className="img-class" src={android}></img>
                <img className="img-class" src={spring}></img>
                <img className="img-class" src={mysql}></img>
                <img className="img-class" src={react}></img>
            </div>
            <p className='p'>I am a 25 year old Engineer. I am currently working as a Technical Support Engineer at Dell EMC. I have a 4 years experience in programming using Java. Programming is one of my biggest motivations. I believe that programming is a kind of a super power that makes significant changes to the world. Therefore, developers have a huge role in making people’s life easier.</p>
            <p><button className="button">Github</button></p>
        </div>

    }
    return (
        <div className="hover_bkgr_fricc" onClick={props.remove}>
            <span className="helper"></span>
            {displayed}
        </div>
    )
}

export default popup;