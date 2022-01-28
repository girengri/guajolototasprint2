import React from "react";
import { ComidaLista } from "./ComidaLista";

export const GuajolotaCategoria = ({ comida }) => {
  return (
    <div>
      <ComidaLista category="guajolota" comida={comida} />
    </div>
  );
};
