import React from "react";
import "./styles.css";
import Precios from "./Componentes/Precios";
import Fecha from "./Componentes/Fecha";
import Paginas from "./Componentes/Paginas";
import PuntajeItem from "./Componentes/PuntajeItem";
import Puntaje from "./Componentes/Puntaje";
import Alert from "./Componentes/Alert";
import Stock from "./Componentes/Stock";

export default function App() {
  const hoy = new Date(1995, 11, 17);

  const productos = [
    { producto: "Chocolates", cantidad: 34, maximo: 100 },
    { producto: "Caramelos", cantidad: 99, maximo: 200 },
    { producto: "Turrones", cantidad: 3, maximo: 50 },
    { producto: "Alfajores", cantidad: 25, maximo: 130 },
    { producto: "Tortas", cantidad: 9, maximo: 10 }
  ];

  return (
    <>
      <Precios valor="50" moneda="USD" />
      <Precios valor="500" moneda="ARS" />
      <Precios valor="45" moneda="EUR" />

      <Fecha date={hoy} />

      <Paginas actual="50" maximo="100" />

      <PuntajeItem tipo="lleno" />
      <PuntajeItem tipo="vacio" />

      <Puntaje puntaje="2" resultado="2 estrellas de 5" />
      <Puntaje puntaje="0" resultado="0 estrellas de 5" />
      <Puntaje puntaje="5" resultado="5 estrellas de 5" />

      <Alert status="danger" menssage="there was an error" />
      <Alert status="succes" menssage="there was an error" />
      <Alert status="warning" menssage="there was an error" />
      <Alert status="info" menssage="there was an error" />
      <ul>
        {productos.map((elem, i) => {
          let colorTexto = getTextColor(elem.cantidad, elem.maximo);
          return (
            <Stock
              key={i}
              producto={elem.producto}
              cantidad={elem.cantidad}
              maximo={elem.maximo}
              textColor={colorTexto}
            />
          );
        })}
      </ul>
    </>
  );
}

const getTextColor = (cantidad, maximo) => {
  if (cantidad > (maximo * 40) / 100) return "texto-verde";
  if (cantidad > (maximo * 25) / 100 && cantidad < (maximo * 40) / 100)
    return "texto-amarillo";
  if (cantidad > (maximo * 10) / 100 && cantidad < (maximo * 25) / 100)
    return "texto-naranja";
  if (cantidad < (maximo * 10) / 100) return "texto-rojo";
};
