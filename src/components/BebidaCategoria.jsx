import React from "react";
import { BebidaLista } from "./BebidaLista";

export const BebidaCategoria = ({ comida }) => {
  return (
    <div>
      <BebidaLista category="bebida" comida={comida} />
    </div>
  );
};
