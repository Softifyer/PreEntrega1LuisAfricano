import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Background from '../img/indexBackground.jpg';

let fondo = {
    Background: { Background },
}

const ItemListConteiner = ({ greeting }) => {
    return (        
        <>
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
                <section className="container-fluid footerStyle">
                    <div className="row">
                        <article className="col-lg-9 col-md-8 col-sm-12 copyright">
                            <p>Copyright © 2023 - Designed & Developed by Ing. Luis Africano</p>
                        </article>
                        <article className="col-lg-3 col-md-4 col-sm-12 liContainerFooter">
                            <a href="https://www.facebook.com/people/Intertronick"><i
                                className="fa-brands fa-square-facebook "></i></a>
                            <a href="https://www.linkedin.com/in/luisafricano/"><i
                                className="fa-brands fa-linkedin alineacionRedes"></i></a>
                            <a href="https://twitter.com/Intertronick"><i
                                className="fa-brands fa-twitter alineacionRedes"></i></a>
                            <a href="https://www.youtube.com/intertronick"><i
                                className="fa-brands fa-youtube alineacionRedes"></i></a>
                        </article>
                    </div>
                </section>
            </div>
        </>             
    )
}

export default ItemListConteiner;
