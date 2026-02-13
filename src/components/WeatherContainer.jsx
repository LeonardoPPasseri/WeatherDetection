import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Temperatura from "./Temperatura";
import WindSpeed from "./WindSpeed";
import Humidity from "./Humidity";
import "../Styles/App.css";

const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cidade, setCidade] = useState("");
  const [lat, setLat] = useState(null);
  const [log, setLog] = useState(null);
  const [loading,setLoading] = useState(false);

  // Buscar latitude e longitude
  const fetchGeoCodingLatLong = async (cidade) => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      cidade,
    )}&count=1&language=pt&format=json`;

    const response = await fetch(url);
    const data = await response.json();
    
    return data;
  };

  // Quando cidade mudar → buscar lat/log
  useEffect(() => {
    if (!cidade) return;
    setLoading(true);
    const buscarLatLog = async () => {
      try {
        const dados = await fetchGeoCodingLatLong(cidade);
        if (!dados.results || dados.results.length === 0) {
          alert("Cidade não encontrada");
          return;
        }

        setLat(dados.results[0].latitude);
        setLog(dados.results[0].longitude);
      } catch (error) {
        console.error("Erro ao buscar geolocalização:", error);
      }
    };

    buscarLatLog();
  }, [cidade]);

  // Quando lat/log mudar → buscar clima
  useEffect(() => {
    if (!lat || !log) return;
    const fetchWeatherData = async () => {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${log}&current_weather=true&hourly=relativehumidity_2m`;
        const response = await fetch(url);
        const data = await response.json();
        montarObjetoClima(data);
      } catch (error) {
        console.error("Erro ao buscar clima:", error);
      }
    };

    fetchWeatherData();
  }, [lat, log]);

  const montarObjetoClima = (data) => {
    console.log(data);
    const temp = data.current_weather.temperature;
    const wind = data.current_weather.windspeed;
    const weathercode = data.current_weather.weathercode;
    const city = cidade;
    const humidity = data.hourly.relativehumidity_2m[0];
    setWeatherData({
        city: cidade,
        temperature: temp,
        windSpeed: wind,
        humidity: humidity,
        weathercode: weathercode
    })
    setLoading(false);
    console.log(data)
    console.log(city,temp, wind, humidity, weathercode);
  };
  if(loading) {
    return (
      <div className="App">
        <Menu nomeCidade={(res) => setCidade(res)} />
        <img className="imgLoading" src="/img/sun.gif" alt="" />
      </div>
    )
  }
  return (
    <div className="App">
      <Menu nomeCidade={(res) => setCidade(res)} />
      <Temperatura data={weatherData} />
      <section className="info">
        <Humidity data={weatherData} />
        <WindSpeed data={weatherData} />
      </section>
    </div>
  );
};

export default WeatherContainer;
