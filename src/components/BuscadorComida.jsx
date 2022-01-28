import React from "react";
import "../styles/buscadorComida.css";

export const BuscadorComida = () => {
  return (
    <div className="buscador">
      <form>
        <input
          type="text"
          placeholder="Sabor de guajolota, bebida..."
          autoComplete="off"
          className="entrada"
        />
      </form>
    </div>
  );
};
