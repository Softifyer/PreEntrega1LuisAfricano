import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Softify from '../img/Softify-logo.png';
import Background from '../img/indexBackground.jpg';
import CarWidget from './CarWidget.jsx';

let fondo = {
    Background: { Background },
}

export const NavBar = ({ greeting }) => {
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
            <div>
                <section className="backgroundMain" style={fondo} >
                    <article className="tituloMain">
                        <h1>Softify</h1>
                        <h2>{greeting}</h2>
                        <p>¡Donde encontrarás lo mejor en software y tecnología!</p>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12 botonConoceme">
                                    <a href="#"><button className="index-ov-btn-grow-ellipse">I N G R E S A R</button></a>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
            <div>
                <section class="container-fluid footerStyle">
                    <div class="row">
                        <article class="col-lg-9 col-md-8 col-sm-12 copyright">
                            <p>Copyright © 2023 - Designed & Developed by Ing. Luis Africano</p>
                        </article>
                        <article class="col-lg-3 col-md-4 col-sm-12 liContainerFooter">
                            <a href="https://www.facebook.com/people/Intertronick"><i
                                class="fa-brands fa-square-facebook "></i></a>
                            <a href="https://www.linkedin.com/in/luisafricano/"><i
                                class="fa-brands fa-linkedin alineacionRedes"></i></a>
                            <a href="https://twitter.com/Intertronick"><i
                                class="fa-brands fa-twitter alineacionRedes"></i></a>
                            <a href="https://www.youtube.com/intertronick"><i
                                class="fa-brands fa-youtube alineacionRedes"></i></a>
                        </article>
                    </div>
                </section>
            </div>
        </>
    )
}

export default NavBar