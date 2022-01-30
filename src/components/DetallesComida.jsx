import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { obtenerComidaPorId } from "../selectors/obtenerComidaPorId";
import "../styles/Detalles.css";

export const DetallesComida = ({ platos }) => {
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
    saborcinco,
    saborseis,
    bebidauno,
    bebidados,
    bebidatres,
    bebidacuatro,
  } = plato;

  const handleReturn = () => {
    navigate(-1);
  };
  return (
    <div>
      <button className="boton" onClick={() => handleReturn()}>
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

      <h3>Sabor</h3>
      <div className="sabores">
        <img src={saboruno} alt="sabor" />
        <img src={sabordos} alt="sabor" />
        <img src={sabortres} alt="sabor" />
        <img src={saborcuatro} alt="sabor" />
        <img src={saborcinco} alt="" />
        <img src={saborseis} alt="" />
      </div>

      <div>
        <h3>Guajolocombo</h3>
        <p>
          Selecciona la bebida que más te guste y <br />
          disfruta de tu desayuno
        </p>

        <form>
          <div>
            <img src={bebidauno.imagenb} alt="combo" />
            <input type="checkbox" />
            <label htmlFor="">{bebidauno.nombre}</label>
            <p>$ {bebidauno.precio} MXN</p>
          </div>

          <div>
            <img src={bebidados.imagenb} alt="combo" />
            <input type="checkbox" />
            <label htmlFor="">{bebidados.nombre}</label>
            <p>$ {bebidados.precio} MXN</p>
          </div>

          <div>
            <img src={bebidatres.imagenb} alt="combo" />
            <input type="checkbox" />
            <label htmlFor="">{bebidatres.nombre}</label>
            <p>$ {bebidatres.precio} MXN</p>
          </div>

          <div>
            <img src={bebidacuatro.imagenb} alt="combo" />
            <input type="checkbox" />
            <label htmlFor="">{bebidacuatro.nombre}</label>
            <p>$ {bebidacuatro.precio} MXN</p>
          </div>
        </form>
      </div>
    </div>
  );
};
