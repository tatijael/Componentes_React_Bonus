import React from "react";
import "./Alert.css";
// const Alert = (props)=>{
const Alert = ({ status, menssage }) => {
  return <div className={`alert alert-${status}`}>{menssage}</div>;
};

export default Alert;
