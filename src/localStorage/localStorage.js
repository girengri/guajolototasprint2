export const guardarDatos = (state) => {
    localStorage.setItem("platos", JSON.stringify(state));
};

export const obtenerDatos = () => {
    const platosStorage = localStorage.getItem("platos");
    if (platosStorage === null || platosStorage === []) {
        return [
            {
                nombrep: "Carrito Vacio",
                imgprincipal:
                    "https://res.cloudinary.com/girengri/image/upload/v1643599591/guajolotas/carrito_jfamlf.png",
                precio: "Carrito Vacio",
            },
        ];
    }
    return JSON.parse(platosStorage);
};

export const eliminarDatos = (id) => {
    const local = JSON.parse(localStorage.getItem("platos"));
    const buscado = local.find((data) => data.ide === Number(id));
    local.forEach((loc, index) => {
        if (loc.ide === buscado.ide) {
            local.splice(index, 1);
            localStorage.setItem("platos", JSON.stringify(local));
            window.location.reload(false);
        }
    });
};
