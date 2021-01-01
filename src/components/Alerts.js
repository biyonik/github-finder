import React from 'react'

const Alerts = (props) => {
    return (
        props.alert !== null && (
            <div className="container my-2">
                <div className={`alert alert-${props.alert.type}`}>
                    {props.alert.message}
                </div>
            </div>
        )
    )
}

export default Alerts;
