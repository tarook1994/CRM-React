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
             <button style={style}
             onClick={props.action}>{props.data}</button>
        </div>
      
    )
}

export default button;