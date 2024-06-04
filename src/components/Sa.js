import React from "react";
import muro from "../assets/images/activations_muro.png"
import mupis from "../assets/images/activations_mupis.png"
import lockers from "../assets/images/activations_lockers.png"

function Sa(){
    return(
        <div className="activations">
            <div className="img_group">
                <div className="short_img">   
                    <div className="imagen1">
                        <img src={muro} alt=""></img>
                    </div>
                    <h4>MUROS</h4>
                </div>
                <div className="short_img">
                    <div className="imagen2">
                        <img src={lockers} alt=""></img>
                    </div>
                    <h4>LOCKERS</h4>
                </div>
            </div>
            <div className="large_img">
                <div className="imagen3">
                    <img src={mupis} alt=""></img>
                </div>
                <h4>MUPIS</h4>
            </div>
        </div>
    )
}

export default Sa;