import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { guardarDatos } from "../localStorage/localStorage";
import { obtenerComidaPorId } from "../selectors/obtenerComidaPorId";
import "../styles/Detalles.css";

export const DetallesBebidas = ({ platos }) => {
  let carrito = [];

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

  const objeto = {
    nombrep,
    imgprincipal,
    precio,
  };

  const mandarDatos = () => {
    carrito.push(objeto);
    guardarDatos(carrito);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      </div>

      <br />

      <h3>Guajolocombo</h3>
      <br />
      <p>
        Selecciona la torta que más te guste y <br />
        disfruta de tu desayuno
      </p>

      <br />

      <form className="contenedorcombo" onSubmit={handleSubmit}>
        <div>
          <img src={guajouno.imagenb} alt="combo" />
          <input type="checkbox" />
          <br />
          <label htmlFor="">{guajouno.nombre}</label>
          <p>$ {guajouno.precio} MXN</p>
        </div>

        <div>
          <img src={guajodos.imagenb} alt="combo" />
          <input type="checkbox" />
          <br />
          <label htmlFor="">{guajodos.nombre}</label>
          <p>$ {guajodos.precio} MXN</p>
        </div>

        <div>
          <img src={guajotres.imagenb} alt="combo" />
          <input type="checkbox" />
          <br />
          <label htmlFor="">{guajotres.nombre}</label>
          <p>$ {guajotres.precio} MXN</p>
        </div>

        <div>
          <img src={guajocuatro.imagenb} alt="combo" />
          <input type="checkbox" />
          <br />
          <label htmlFor="">{guajocuatro.nombre}</label>
          <p>$ {guajocuatro.precio} MXN</p>
        </div>

        <div>
          <img src={guajocinco.imagenb} alt="combo" />
          <input type="checkbox" />
          <br />
          <label htmlFor="">{guajocinco.nombre}</label>
          <p>$ {guajocinco.precio} MXN</p>
        </div>

        <button
          className="btnenviar"
          type="submit"
          onClick={() => mandarDatos()}
        >
          Agregar al carrito
        </button>
      </form>
    </div>
  );
};
