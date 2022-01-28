import React from "react";
import { Link } from "react-router-dom";
import { BuscadorComida } from "../components/BuscadorComida";
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
            <BuscadorComida />
            <nav className="categoriasContenedor">
                <Link to="/guajolota">Guajolotas</Link>
                <Link to="/bebida">Bebidas</Link>
                <Link to="/tamal">Tamales</Link>
            </nav>
        </React.Fragment>
    );
};
