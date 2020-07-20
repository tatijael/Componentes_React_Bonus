import React from "react";
import "./stock.css";

const Stock = ({ producto, cantidad, maximo, textColor }) => {
  // if (cantidad < (maximo * 10) / 100) {
  return <li className={textColor}>{producto}</li>;
  // }
};

export default Stock;
