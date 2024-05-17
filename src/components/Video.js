import React from "react";
import ReactPlayer from "react-player/lazy";

const Video = ({ title, src, text, onClose }) => {
    return (
      <div className="video_content">
        <ReactPlayer url={src} controls width='80%' height='90%'/>
        <div className="video_description">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
        <button onClick={onClose} >×</button>
      </div>
    );
};

export default Video;