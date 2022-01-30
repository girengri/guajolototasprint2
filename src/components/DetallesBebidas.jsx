import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { obtenerComidaPorId } from "../selectors/obtenerComidaPorId";
import "../styles/Detalles.css"

export const DetallesBebidas = ({ platos }) => {
  const navigate = useNavigate();

  const { id } = useParams();

  const plato = obtenerComidaPorId(id, platos);
  console.log(plato);
  const {
    nombrep,
    precio,
    imgprincipal,
    saboruno,
    sabordos,
    sabortres,
    saborcuatro,
    guajouno,
    guajodos,
    guajotres,
    guajocuatro,
    guajocinco,
  } = plato;

  const handleReturn = () => {
    navigate(-1);
  };
  return (
    <div>
      <button onClick={() => handleReturn()}>
        <img
          src="https://res.cloudinary.com/girengri/image/upload/v1643570204/guajolotas/flecha_tvu61y.png"
          alt="volver"
        />
      </button>

      <div className="contenedorimg">
        <img className="imagenp" src={imgprincipal} alt="ImagenP" />
        <h2 className="nombreprincipal">{nombrep}</h2>
        <p className="preciop">$ {precio} MXN</p>
      </div>

      <div className="sabores">
        <h3>Sabor</h3>
        <img src={saboruno} alt="sabor" />
        <img src={sabordos} alt="sabor" />
        <img src={sabortres} alt="sabor" />
        <img src={saborcuatro} alt="sabor" />
      </div>

      <div>
        <h3>Guajolocombo</h3>
        <p>
          Selecciona la torta que más te guste y <br />
          disfruta de tu desayuno
        </p>

        <form>
          <div>
            <img src={guajouno.imagenb} alt="combo" />
            <input type="checkbox" />
            <label htmlFor="">{guajouno.nombre}</label>
            <p>$ {guajouno.precio} MXN</p>
          </div>

          <div>
            <img src={guajodos.imagenb} alt="combo" />
            <input type="checkbox" />
            <label htmlFor="">{guajodos.nombre}</label>
            <p>$ {guajodos.precio} MXN</p>
          </div>

          <div>
            <img src={guajotres.imagenb} alt="combo" />
            <input type="checkbox" />
            <label htmlFor="">{guajotres.nombre}</label>
            <p>$ {guajotres.precio} MXN</p>
          </div>

          <div>
            <img src={guajocuatro.imagenb} alt="combo" />
            <input type="checkbox" />
            <label htmlFor="">{guajocuatro.nombre}</label>
            <p>$ {guajocuatro.precio} MXN</p>
          </div>

          <div>
            <img src={guajocinco.imagenb} alt="combo" />
            <input type="checkbox" />
            <label htmlFor="">{guajocinco.nombre}</label>
            <p>$ {guajocinco.precio} MXN</p>
          </div>
          
        </form>
      </div>
    </div>
  );
};
