import React, { useState } from "react";
import "../Styles/menu.css";
import lupa from "/img/search.png";

const Menu = ({ nomeCidade }) => {
  //const [cidade, setCidade] = useState('');
  const [value, setValue] = useState("");

  const handleSearch = async () => {
    if (!value) return;
    //await setCidade(value);
    await nomeCidade(value);
  };

  return (
    <div className="menu">
      <input
        className="input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Digite a cidade..."
      />
      <button className="btn" type="button" onClick={handleSearch}>
        <img src={lupa} alt="lupa" />
      </button>
    </div>
  );
};

export default Menu;
