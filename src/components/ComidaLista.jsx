import React from "react";
import { obtenerComidaPorCategoria } from "../selectors/obtenerComidaPorCategoria";
import ComidaCard from "./ComidaCard";

export const ComidaLista = ({ category, comida }) => {
    const foods = obtenerComidaPorCategoria(category, comida);
    return (
        <div>
            {foods.map((food) => (
                <ComidaCard key={food.id} {...food} />
            ))}
        </div>
    );
};
