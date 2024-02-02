import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";


const CarWidget = () => {
    return (
        <>
        <div>
            <li className="nav-item"><a className="nav-link" href="#"><button type="button" className="btn btn-outline-light"><i className="bi bi-cart3">(3)</i></button></a></li>
        </div>
        </>
    );
}

export default CarWidget;
