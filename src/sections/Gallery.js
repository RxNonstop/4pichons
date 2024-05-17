import React, {useState} from "react";
import MenuLateral from "../components/MenuLateral";
import TituloVertical from "../components/TituloVertical";

import VirtualReality from "../components/VirtualReality";
import Vr360 from "../components/Vr360";
import Travels from "../components/Travels";
import Sf from "../components/Sf";
import Sa from "../components/Sa";

function Gallery(){

  const [MenuOption, setMenuOption] = useState('');

  const handleOption = (option) => {
    if(option !== MenuOption){
      setMenuOption(option);
    }
  }

  return(
    <section className="servicios">
      {MenuOption === '' && <div><h1>Hola</h1></div>}
      {MenuOption === 'meeting' && <VirtualReality></VirtualReality>}
      {MenuOption === 'vr' && <VirtualReality></VirtualReality>}
      {MenuOption === 'travels' && <Travels></Travels>}
      {MenuOption === 'team' && <VirtualReality></VirtualReality>}
      {MenuOption === '360' && <Vr360></Vr360>}
      {MenuOption === 'sf' && <Sf></Sf>}
      {MenuOption === 'sa' && <Sa></Sa>}
      <div className="contenedor-menu_servicios">
        <MenuLateral onChange={handleOption}></MenuLateral>
      </div>
    </section>
  )
}

export default Gallery