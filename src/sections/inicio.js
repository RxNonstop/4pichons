import React from "react";
import BannerImg from "../assets/images/img_inicio.png";

function Inicio({ children }) {
  return (
    <section className="inicio" id="inicio">
      <img
        style={{
          position: "absolute",
          objectFit: "contain",
          right: "0",
          width: "80vw",
          zIndex: "-1",
        }}
        width="100%"
        height="100%"
        alt="banner"
        src={BannerImg}
      />
      <div className="text_inicio">
        <h1>MEETING PLANERS</h1>
        <p>
          "¡Sumérgete en la realidad virtual y haz que tus emociones cobren vida
          con nosotros!"
        </p>
      </div>
      {/*MenuLateral */}
      {children}
    </section>
  );
}

export default Inicio;
