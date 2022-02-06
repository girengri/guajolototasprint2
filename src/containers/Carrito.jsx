import { eliminarDatos, obtenerDatos } from "../localStorage/localStorage";
import "../styles/carrito.css";

export const Carrito = () => {
  const data = obtenerDatos();
  return (
    <div>
      {data.map((dat) => (
        <div key={dat.ide} className="contenedorCardCarrito">
          <img src={dat.imgprincipal} alt="guajolota" />

          <div className="cardHijo">
            <h2>{dat.nombrep}</h2>
            <p>$ {dat.precio} MXN</p>
          </div>

          <button
            className="btnEliminar"
            onClick={() => eliminarDatos(dat.ide)}
          >
            Eliminar
          </button>
        </div>
      ))}
      <div className="btnpagar">
        <button type="submit" className="btnenviaruno">
          Pagar
        </button>
      </div>
    </div>
  );
};
