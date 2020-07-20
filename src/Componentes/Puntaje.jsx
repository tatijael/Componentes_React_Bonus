import React from "react";
import PuntajeItem from "./PuntajeItem";

const Puntaje = ({ puntaje, resultado }) => {
  const arrayDeEstrellas = [0, 1, 2, 3, 4];
  const estrellas = arrayDeEstrellas.map(estrella => {
    return <PuntajeItem tipo={puntaje > estrella ? "lleno" : "vacio"} />;
  });
  return (
    <div>
      {estrellas} {resultado}
    </div>
  );
};
export default Puntaje;
