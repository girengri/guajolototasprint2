export const obtenerComboPorNombre = (nombre, plato) => {
    nombre = nombre.toLocaleLowerCase();

    return plato.filter((plat) =>
        plat.nombrep.toLocaleLowerCase().includes(nombre)
    );
};
