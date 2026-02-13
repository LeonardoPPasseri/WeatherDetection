import React, { use, useEffect,useState } from "react";
import "../Styles/temperatura.css";
import clouds from "/img/clouds.png";
const Temperatura = ({data}) => {

  //const [temperature, setTemperature] = React.useState(null);
  //const [city, setCity] = React.useState(null);
  //Só use useState se precisar alterar o valor!
  
  /*
  useEffect(() => {
    if(!data) return;

    console.log(data);
  },[data])
  */ 
  //Como o componente pai já tem os dados prontos, é só jogar pra tela.

  const [iconPath, setIconPath] = useState("");

  function getWeatherIcon() {
    const code = data.weathercode;
    
    switch (true) {
        case (code == 0):
          setIconPath("clear.png");
          break;
        case (code >= 1 && code <= 3):
            setIconPath("clouds.png");
            break;
        
        case (code === 45 || code === 48):
            setIconPath("mist.png");
            break;

        case (code >= 51 && code <= 57):
            setIconPath("drizzle.png");
            break;

        case (code >= 61 && code <= 67):
        case (code >= 80 && code <= 82):
        case (code >= 95 && code <= 99):
            setIconPath("rain.png");
            break;

        case (code >= 71 && code <= 77):
        case (code >= 85 && code <= 86):
            setIconPath("snow.png");
            break;

        default:
            setIconPath("clouds.png");
            break;
    }
    return iconPath;
}
useEffect(() => {
  if(!data) return;
  getWeatherIcon();
},[data])


  return (
    <div className="temperatura">
      <img className="iconeClima" src={iconPath !== "" ? `/img/${iconPath}` : clouds} alt="iconeClima" />
      <h1 className="graus" >{data?.temperature || 0}°c</h1>
      <h2 className="cidade" >{data?.city || "Cidade não encontrada"}</h2>
    </div>
  );
};

export default Temperatura;
