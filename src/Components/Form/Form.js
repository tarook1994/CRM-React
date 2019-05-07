import React from 'react';
import './Form.css'

const form = (props) => {
    return (
        <div className="container">
            <form>
                <div className="row">
                    <div className="col-25">
                        <label for="fname">First Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Your Fist name.." onChange={props.firstName}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="fname">Last Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Your Last name.." onChange={props.lastName}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="fname">Email</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="email" name="email" placeholder="Your Email.." onChange={props.email} />
                    </div>
                </div>
            </form>

         

        </div>
    )
}

export default form;