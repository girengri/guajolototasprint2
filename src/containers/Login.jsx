import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

export const Login = () => {
    return (
        <div>
            <body>
                <section class="contenedor">
                    <h1>Iniciar sesion</h1>
                    <br></br>
                    <input type="text" placeholder="Correo Electronico"></input>
                    <br></br>
                    <input type="password" placeholder="Contraseña"></input>
                    <br></br>
                    <input type="submit" value="Ingresar" class="button" onclick=""><Link to="/registro">Registro</Link></input>
                    <br></br>
                    <p>¿Se te olvido tu contraseña?</p>
                    <p>¿Aun no tienes una cuenta?<Link to="/registro">Registro</Link></p>
                </section>
            </body>
        </div>
    )
};
