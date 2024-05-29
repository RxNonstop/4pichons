import React, { useState } from 'react';

const GalleryVideo = ({ videoSrc, title }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
        <div 
        className="video-only"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
            <video src={videoSrc} autoPlay loop muted className="video" />
            {hovered && (
                <div className="overlay">
                <div className="play-icon">▶</div>
                </div>
            )}
        </div>
        <div className='video-title'>{title}</div>
    </div>
  );
};

export default GalleryVideo;