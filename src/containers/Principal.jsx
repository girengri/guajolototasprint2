import React from "react";
import { Link } from "react-router-dom";
import "../styles/principal.css";

export const Principal = () => {
    return (
        <React.Fragment>
            <main>
                <div className="hero">
                    <p className="parrafo">
                        Nada como una <br />
                        Guajolota para <br /> empezar el día
                    </p>
                </div>
            </main>

            <div className="buscadorcentrar">
            <Link to="/buscador">
                <img
                    src="https://res.cloudinary.com/girengri/image/upload/v1643570204/guajolotas/buscador_nb0ykx.png"
                    alt="buscador"
                />
            </Link>
            </div>
            <nav className="categoriasContenedor">
                <Link to="/guajolota">Guajolotas</Link>
                <Link to="/bebida">Bebidas</Link>
                <Link to="/tamal">Tamales</Link>
            </nav>
        </React.Fragment>
    );
};
