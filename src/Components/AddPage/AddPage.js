import React from 'react';
import Form from '../Form/Form'
import Button from '../Button/Button'
import './AddPage.css'
const addPage = (props) => {
    let buttonType= null;
    if(props.update){
        buttonType =  <button  onClick={props.update}>Update</button>
    } else {
        buttonType =  <button  onClick={props.save}>Save</button>
    }
    return (
        <div id="add-container-div">
            <p>Add Customer</p>
            <Form back={props.back}
            firstName = {props.firstName}
            lastName = {props.lastName}
            email = {props.email}
            />

            <button onClick={props.back}>Back</button>
            {buttonType}


        </div>
    )
}

export default addPage;