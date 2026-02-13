import { useState } from "react";
import "./Styles/App.css";
import Menu from "./components/Menu";
import Temperatura from "./components/Temperatura";
import WindSpeed from "./components/WindSpeed";
import Humidity from "./components/Humidity";
import WeatherContainer from "./components/WeatherContainer";

function App() {
  return (
    <>
      <WeatherContainer />
    </>
  );
}

export default App;
