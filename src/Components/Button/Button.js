import React from 'react';
import './Button.css'

const button = (props) => {
    let style = {

    }
    if(props.type === 'delete'){
        style = {
            color: 'white',
            backgroundColor: 'red'
        }
    } 

    return (
        <div>
             <button style={style}>{props.data}</button>
        </div>
      
    )
}

export default button;