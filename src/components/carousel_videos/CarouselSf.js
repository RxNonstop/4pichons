import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import video1 from '../../assets/videos/video1.mp4';
function CarouselSf() {
    return(
        <Carousel>
            <Carousel.Item>
                <div className='video-container'>
                    <video src={video1} autoPlay muted loop className='video_content'>
                    </video>
                    <div className='carousel-caption'>
                    <div className='text'>
                        <h1>SUSTENTABLE FORNITURE</h1>
                        <p>Haz algo verde hoy y apoya el futuro! desarrolla de Forma más ecofriendly tus eventos corporativos con nosotros</p>
                    </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselSf