import React from "react";
import video_sf from "../assets/videos/video_sf.mp4";
import sf_img1 from "../assets/images/sf_img1.jpeg"
import sf_img2 from "../assets/images/sf_img2.jpeg"
import sf_img3 from "../assets/images/sf_img3.png"
import sf_img4 from "../assets/images/sf_img4.png"

function Sf(){
    return(
        <div className="furniture">
            <div className="img_group">
                <div className="short_img_f50">
                    <img src={sf_img1} alt=""></img>
                </div>
                <div className="short_img_f50">
                    <img src={sf_img2} alt=""></img>
                </div>
            </div>
            <div className="img_group">
                <div className="short_img_f35">
                    <img src={sf_img3} alt=""></img>
                </div>
                <div className="short_img_f55">
                    <img src={sf_img4} alt=""></img>
                </div>
            </div>
            <div className="large_video">
                <video src={video_sf} controls></video>
            </div>
        </div>
    )
}

export default Sf;