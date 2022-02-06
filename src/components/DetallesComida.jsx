import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { guardarDatos } from "../localStorage/localStorage";
import { obtenerComidaPorId } from "../selectors/obtenerComidaPorId";
import "../styles/Detalles.css";

export const DetallesComida = ({ platos }) => {
  const [carrito, setCarrito] = useState([]);

  let platoLocales = JSON.parse(localStorage.getItem("platos"));
  useEffect(() => {
    if (platoLocales !== undefined) {
      setCarrito(...carrito, platoLocales);
    }
    if (platoLocales === null || platoLocales === undefined) {
      localStorage.setItem("platos", JSON.stringify([objeto]));
    }
  }, []);

  console.log(carrito);

  const navigate = useNavigate();

  const { id } = useParams();

  const plato = obtenerComidaPorId(id, platos);
  console.log(plato);
  const {
    id:ide,
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

  const objeto = {
    ide,
    nombrep,
    imgprincipal,
    precio,
  };

  const mandarDatos = () => {
    setCarrito([...carrito, objeto]);
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
        <img src={saborcinco} alt="" />
        <img src={saborseis} alt="" />
      </div>

      <br />
      <h3>Guajolocombo</h3>
      <br />
      <p>
        Selecciona la bebida que más te guste y <br />
        disfruta de tu desayuno
      </p>
      <br />

      <form className="contenedorcombo" onSubmit={handleSubmit}>
        <div>
          <img src={bebidauno.imagenb} alt="combo" />
          <input type="checkbox" />
          <br />
          <label htmlFor="">{bebidauno.nombre}</label>
          <p>$ {bebidauno.precio} MXN</p>
        </div>

        <div>
          <img src={bebidados.imagenb} alt="combo" />
          <input type="checkbox" />
          <br />
          <label htmlFor="">{bebidados.nombre}</label>
          <p>$ {bebidados.precio} MXN</p>
        </div>

        <div>
          <img src={bebidatres.imagenb} alt="combo" />
          <input type="checkbox" />
          <br />
          <label htmlFor="">{bebidatres.nombre}</label>
          <p>$ {bebidatres.precio} MXN</p>
        </div>

        <div>
          <img src={bebidacuatro.imagenb} alt="combo" />
          <input type="checkbox" />
          <br />
          <label htmlFor="">{bebidacuatro.nombre}</label>
          <p>$ {bebidacuatro.precio} MXN</p>
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
