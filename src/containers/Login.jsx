import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

export const Login = () => {
    const verificarDatos = () => {
        let nombreGuardado = localStorage.getItem("nombre");
        let correoGuardado = localStorage.getItem("correo");
        let passGuardado = localStorage.getItem("pass");

        let correoUsuario = document.getElementById("correoLogin");
        let passUsuario = document.getElementById("passLogin");

        if (
            correoUsuario.value === correoGuardado &&
            passUsuario.value === passGuardado
        ) {
            alert("Bienvenido " + nombreGuardado);
            <Link to="/principal"></Link>;
            window.location.href = "<Link to=/principal></Link>l";
        } else {
            alert("Datos incorrectos");
        }
    };
    return (
        <div>
            <div className="body">
                <section className="contenedor">
                    <h1>Iniciar sesion</h1>
                    <br></br>
                    <input
                        type="text"
                        placeholder="Correo Electronico"
                        id="correoLogin"
                    ></input>
                    <br></br>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        id="passLogin"
                    ></input>
                    <br></br>
                    <input
                        type="submit"
                        value="Ingresar"
                        className="button"
                        onClick={() => verificarDatos()}
                    ></input>
                    <br></br>
                    <p>¿Se te olvido tu contraseña?</p>
                    <p>
                        ¿Aun no tienes una cuenta?<Link to="/registro">Registro</Link>
                    </p>
                </section>
            </div>
        </div>
    );
};
