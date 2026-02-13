import React from "react";
import "../Styles/temperatura.css";
import sol from "../img/clear.png";
const Temperatura = () => {
  return (
    <div className="temperatura">
      <img className="iconeClima" src={sol} alt="iconeClima" />
      
      <h1 className="graus" >30°c</h1>
      <h2 className="cidade" >Bengaluru</h2>
    </div>
  );
};

export default Temperatura;
