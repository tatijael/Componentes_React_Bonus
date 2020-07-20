import React from "react";

const PuntajeItem = ({ tipo }) => {
  if (tipo === "lleno") {
    return "★";
  } else {
    return "✩";
  }
};

export default PuntajeItem;
