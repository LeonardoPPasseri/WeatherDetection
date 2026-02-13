import React from "react";
import "../Styles/windspeed.css";
import vento from "../img/wind.png";
const WindSpeed = () => {
  return (
    <div className="windSpeed">
      <img src={vento} alt="iconeVento" />
      <section className="windSpeedInfo">
        <h3>5.66 km/h</h3>
        <h4>Wind Speed</h4>
      </section>
    </div>
  );
};

export default WindSpeed;
