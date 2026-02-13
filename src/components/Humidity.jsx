import React from "react";
import "../Styles/humidity.css";
import humidity from "../img/humidity.png";

const Humidity = () => {
  return (
    <div className="humidity">
      <img src={humidity} alt="iconeUmidade" />
      <section className="humidityinfo">
        <h3>65%</h3>
        <h4>Humidity</h4>
      </section>
    </div>
  );
};

export default Humidity;
