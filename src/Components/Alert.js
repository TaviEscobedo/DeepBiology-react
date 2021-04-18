import React from 'react'

const Alert = ({msg}) => {
    return (
        <div className="alert alert-info text-center" role="alert">
            {msg}
        </div>

        // <div className="alert alert-info alert-dismissible fade show " role="alert">
        //     <strong>{msg}</strong>
        //         <button type="button" className="close mx-auto" data-dismiss="alert" aria-label="Close">
        //             <span aria-hidden="true">&times;</span>
        //         </button>
        // </div>
    )
}
export default Alert;