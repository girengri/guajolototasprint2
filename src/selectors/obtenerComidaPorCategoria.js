export const obtenerComidaPorCategoria = (categoria, comidas) => {
    const validarCategoria = ["guajolota", "bebida", "tamal"];

    if (!validarCategoria.includes(categoria)) {
        throw new Error(`La categoria "${categoria}" no es correcto`);
    }

    return comidas.filter((comida) => comida.categoria === categoria);
};
