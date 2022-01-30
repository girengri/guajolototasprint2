import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

export const Registro = () => {
    return (
        <div>
            <body>
                <section class="contenedor">
                    <h1>Crear Una Cuenta</h1>
                    <br></br>
                    <input type="text" placeholder="Nombre"></input>
                    <br></br>
                    <input type="text" placeholder="Correo Electronico"></input>
                    <br></br>
                    <input type="password" placeholder="Contraseña"></input>
                    <br></br>
                    <input type="submit" value="Registrarse" class="button"></input>
                    <br></br>
                    <p>Al registrarte acpetas los terminos y condiciones y bla bla bla...</p>
                    <p>¿ya tienes una cuenta?<Link to="/login">Iniciar sesion</Link></p>
                </section>
            </body>
        </div>
    )
};