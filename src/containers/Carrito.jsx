import { obtenerDatos } from "../localStorage/localStorage";
import "../styles/carrito.css"

export const Carrito = () => {
  const data = obtenerDatos();
  return (
    <div>
      {data.map((dat, index) => (
        <div key={index} className="contenedorCard">
          <img src={dat.imgprincipal} alt="guajolota" />

          <div className="cardHijo">
            <h2>{dat.nombrep}</h2>
            <p>$ {dat.precio} MXN</p>
          </div>
        </div>

      ))}
      <div className="btnpagar">
      <button className="btnenviaruno" >Pagar</button>
      </div>
    </div>
  );
};
