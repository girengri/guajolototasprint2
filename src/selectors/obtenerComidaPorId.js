export const obtenerComidaPorId = (id, comidas) => {
    return comidas.find((comida) => comida.id === Number(id));
};
