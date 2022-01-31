import React from "react";
import { useForm } from "../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import querystring from "query-string";
import { obtenerComboPorNombre } from "../selectors/obtenerComboPorNombre";
import ComidaCard from "./ComidaCard";
import "../styles/buscadorComida.css";

export const BuscadorComida = ({ plato }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const { q = "" } = querystring.parse(location.search);

  const [values, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  const platosFiltrados = obtenerComboPorNombre(searchText, plato);

  return (
    <div className="buscador">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Sabor de guajolota, bebida..."
          autoComplete="off"
          className="entrada"
          name="searchText"
          value={searchText}
          onChange={handleInputChange}
          size="100"
        />
      </form>

      <div>
        {platosFiltrados.map((plato) => (
          <ComidaCard key={plato.id} {...plato} />
        ))}
      </div>
    </div>
  );
};
