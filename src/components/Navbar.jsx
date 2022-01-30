import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="menu">
      <Link to="/principal">
        <img
          src="https://res.cloudinary.com/girengri/image/upload/v1643346909/guajolotas/logo_qnqilw.png"
          alt="logo"
          width="100"
        />
      </Link>
      <Link to="/login">
        <img
          src="https://res.cloudinary.com/girengri/image/upload/v1643346916/guajolotas/shopping-cart_nfyidz.png"
          alt="carrito"
          width="30"
        />
      </Link>

      <Link to="/carrito">
        <img
          src="https://res.cloudinary.com/girengri/image/upload/v1643346916/guajolotas/shopping-cart_nfyidz.png"
          alt="carrito"
          width="30"
        />
      </Link>
    </nav>
  );
};
