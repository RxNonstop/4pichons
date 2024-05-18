import React from "react";
import BannerImg from "../assets/images/img_inicio.png";

function Inicio({ children }) {
  return (
    <section className="inicio" id="inicio">
      <img
        style={{
          position: "absolute",
          objectFit: "cover",
          right: "0",
          bottom: "-175px",
          maskImage: "linear-gradient(black 75%, transparent, transparent)",
          width: "68vw",
          zIndex: "-1",
        }}
        width="100%"
        height="100%"
        alt="banner"
        src={BannerImg}
      />
      <div className="text_inicio">
        <h3>A TU ALCANCE</h3>
        <h1>ESTÁ EL METAVERSO</h1>
        <p>
          "¡Sumérgete en la realidad virtual y haz que tus emociones cobren vida
          con nosotros!"
        </p>
        <button>DESCUBRELO</button>
      </div>
      {/*MenuLateral */}
      {children}
    </section>
  );
}

export default Inicio;
