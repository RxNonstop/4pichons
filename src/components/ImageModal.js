import React from "react";

const ImageModal = ({ title, src, text, onClose }) => {
    return (
      <div className="video_content">
        <img src={src} alt="imagen modal">
        </img>
        <div className="video_description">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
        <button onClick={onClose} >×</button>
      </div>
    );
};

export default ImageModal;