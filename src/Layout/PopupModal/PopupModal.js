import React from 'react';
import './PopupModal.css'

const popup = (props) => {
    return (
        <div className="hover_bkgr_fricc" onClick={props.remove}>
            <span className="helper"></span>
            <div>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default popup;