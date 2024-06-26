import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import furniture from '../../assets/videos/sustainable_furniture.mp4';
function CarouselSf() {
    return(
        <Carousel>
            <Carousel.Item>
                <div className='video-container'>
                    <video src={furniture} autoPlay muted loop></video>
                    <div className='carousel-caption'>
                    <div className='text'>
                        <h1>SUSTENTABLE FURNITURE</h1>
                        <p>Haz algo verde hoy y apoya el futuro! desarrolla de Forma más ecofriendly tus eventos corporativos con nosotros</p>
                    </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselSf