import React from "react";
import MenuLateral from "../components/MenuLateral";

function Inicio() {
    return (
        <section className='inicio' id="inicio">
          <div className='text_inicio'>
            <h3>A TU ALCANCE</h3>
            <h1>ESTÁ EL METAVERSO</h1>
            <p>"¡Sumérgete en la realidad virtual y haz que tus emociones cobren vida con nosotros!"</p>
            <button>DESCUBRELO</button>
          </div>
          <div className="contenedor-menu">
            <MenuLateral/>
          </div>
        </section>
    );
  }
  
  export default Inicio;