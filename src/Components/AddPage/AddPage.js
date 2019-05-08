import React from 'react';
import Form from '../Form/Form'
import Button from '../Button/Button'
const addPage = (props) => {
    return (
        <div>
            <p>Add Customer</p>
            <Form back={props.back}
            firstName = {props.firstName}
            lastName = {props.lastName}
            email = {props.email}
            />

            <button onClick={props.back}>Back</button>
            <button onClick={props.save}>Save</button>


        </div>
    )
}

export default addPage;