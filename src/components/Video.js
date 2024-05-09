import React from "react";

const Video = ({ title, src, text, onClose }) => {
    return (
      <div className="video_content">
        <video controls>
          <source src={src} type="video/mp4"/>
        </video>
        <div className="video_description">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
        <button onClick={onClose} >×</button>
      </div>
    );
};

export default Video;