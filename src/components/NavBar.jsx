import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Softify from '../img/Softify-logo.png';
import CarWidget from './CarWidget.jsx';

export const NavBar = () => {
    return (
        <>
            <div className='header'>
                <div className='header'>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand logo" href="./index.html">
                                <img className="d-inline-block align-content-center logo" src={Softify}
                                    alt="Logo Softify" /><span className="navbar-text">Softify</span>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa-solid fa-bars"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav justify-content-end mb-2 mb-lg-0 liContainer">
                                <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Software</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Componentes</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Licenciamiento</a></li>
                                <CarWidget />
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar