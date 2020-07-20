import React from "react";

const Precios = ({ valor, moneda }) => {
  const valorFinal = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: moneda
  }).format(valor);
  return <p>{valorFinal}</p>;
};

export default Precios;
