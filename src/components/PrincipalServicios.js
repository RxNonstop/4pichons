import React from "react";
import banner from "../assets/images/banner_servicios.png"

function PrincipalServicios(){
    return(
        <div className="servicios_principal">
            <div className="banner_servicios">
                <img src={banner} alt=""></img>
            </div>
            <div className="text_servicios">
                <h1>!ATREVETE CON NOSOTROS!</h1>
                <p>Encuentra la solucion perfecta  para ti y tus eventos</p>
            </div>  
        </div>
    )
}

export default PrincipalServicios;