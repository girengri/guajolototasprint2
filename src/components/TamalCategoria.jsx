import React from "react";
import { ComidaLista } from "./ComidaLista";

export const TamalCategoria = ({ comida }) => {
  return (
    <div>
      <ComidaLista category="tamal" comida={comida} />
    </div>
  );
};
