import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./sections/Inicio";
import Contact from "./sections/Contactanos";
import Slider from "./sections/Slider";
import logo from "./assets/images/6--Blanco.png";
import Gallery from "./sections/Gallery";
import MenuLateral from "./components/MenuLateral";
import GalleryImages from "./components/GalleryImages";

function App() {
  const [selectedOption, setSelectedOption] = useState("inicio");
  const [menuOption, setMenuOption] = useState("");
  const [menuOptionIndex, setMenuOptionIndex] = useState(0);
  const handleSelectedOption = (option) => {
    setMenuOption("");
    setMenuOptionIndex(0);
    if (option !== selectedOption) {
      setSelectedOption(option);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container_header">
          <div className="header1">
            <img src={logo} className="logo" alt="logo" />
            <nav className="navbar">
              <ul>
                <li>
                  <a  className={
                      selectedOption == "inicio" ? "seleccionado" : ""
                    }
                    href="#" onClick={() => handleSelectedOption("inicio")}>
                    INICIO
                  </a>
                </li>
                <li>
                  <a
                    className={
                      selectedOption == "servicios" ? "seleccionado" : ""
                    }
                    href="#"
                    onClick={() => handleSelectedOption("servicios")}
                  >
                    SERVICIOS
                  </a>
                </li>
                <li>
                  <a href="#slider">CONOCENOS</a>
                </li>
                <li>
                  <a href="#contactanos">CONTACTANOS</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header2">
            <button className="demos">DEMOS</button>
          </div>
        </div>
      </header>
      {selectedOption === "inicio" && (
        <Inicio>
          <div className="contenedor-menu">
            <MenuLateral
              menuOption={menuOption}
              menuOptionIndex={menuOptionIndex}
              setMenuOptionIndex={setMenuOptionIndex}
              setMenuOption={setMenuOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
        </Inicio>
      )}
      {selectedOption === "servicios" && (
        <Gallery menuOption={menuOption}>
          <div className="contenedor-menu_servicios">
            <MenuLateral
              menuOption={menuOption}
              menuOptionIndex={menuOptionIndex}
              setMenuOptionIndex={setMenuOptionIndex}
              setMenuOption={setMenuOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
        </Gallery>
      )}
      <Slider></Slider>
      <GalleryImages></GalleryImages>
      <Contact></Contact>
    </div>
  );
}

export default App;
