import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import video1 from '../../assets/videos/video1.mp4';
function CarouselVr() {
    return(
        <Carousel>
            <Carousel.Item>
                <div className='video-container'>
                    <video src={video1} autoPlay muted loop className='video_content'>
                    </video>
                    <div className='carousel-caption'>
                    <div className='text'>
                        <h1>VIRTUAL REALITY</h1>
                        <p>Recorre con nosotros entornos tridimensionales interactivos en donde te verás inmerso, a través del uso de nuestros visores VR.</p>
                    </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselVr