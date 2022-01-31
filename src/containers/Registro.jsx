import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";


function guardarDatos(){

    let nombreUsuario = document.getElementById('nombre');
    let correoUsuario = document.getElementById('correo');
    let usuarioPass = document.getElementById('pass');

    localStorage.setItem('nombre', nombreUsuario.value);
    localStorage.setItem('correo', correoUsuario.value);
    localStorage.setItem('pass', usuarioPass.value);
    alert("Se ha registrado correctamente");
}


export const Registro = () => {
    return (
        <div>
            <div>
                <section className="contenedor">
                    <h1>Crear Una Cuenta</h1>
                    <br></br>
                    <input type="text" placeholder="Nombre" id="nombre"></input>
                    <br></br>
                    <input type="text" placeholder="Correo Electronico" id="correo"></input>
                    <br></br>
                    <input type="password" placeholder="Contraseña" id="pass"></input>
                    <br></br>
                    <input type="submit" value="Registrarse" className="button" onClick={guardarDatos}></input>
                    <br></br>
                    <p>Al registrarte acpetas los terminos y condiciones y bla bla bla...</p>
                    <p>¿ya tienes una cuenta?<Link to="/login">Iniciar sesion</Link></p>
                </section>
            </div>
        </div>
    )
};