import React from "react";
import { ComidaLista } from "./ComidaLista";

export const BebidaCategoria = ({comida}) => {
  return (
    <div>
      <ComidaLista category="bebida" comida={comida} />
    </div>
  );
};
