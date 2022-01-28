import React from "react";
import { Link } from "react-router-dom";
import "../styles/comidaCard.css"

const ComidaCard = ({ id, nombrep, precio, imgprincipal }) => {
    return (
        <Link className="linkCard" to={`/detalle/${id}`}>
            <div className="contenedorCard">
                <img src={imgprincipal} alt="guajolota" />

                <div className="cardHijo">
                    <h2>{nombrep}</h2>
                    <p>$ {precio} MXN</p>
                </div>
            </div>
        </Link>
    );
};

export default ComidaCard;
