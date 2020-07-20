import React from "react";

const Fecha = ({ date }) => {
  const nuevaFecha = new Intl.DateTimeFormat("en-US").format(date);
  return <p>{nuevaFecha}</p>;
};

export default Fecha;
