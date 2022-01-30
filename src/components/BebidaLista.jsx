import React from "react";
import { obtenerComidaPorCategoria } from "../selectors/obtenerComidaPorCategoria";
import { BebidaCard } from "./BebidaCard";


export const BebidaLista = ({ category, comida }) => {
    const foods = obtenerComidaPorCategoria(category, comida);
    return (
        <div>
            {foods.map((food) => (
                <BebidaCard key={food.id} {...food} />
            ))}
        </div>
    );
};
