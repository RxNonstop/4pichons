import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import travels from '../../assets/videos/travels.mp4';

function CarouselTravels() {
    return(
        <Carousel>
            <Carousel.Item>
                <div className='video-container'>
                    <video src={travels} autoPlay muted loop className='video_content'>
                    </video>
                    <div className='carousel-caption'>
                    <div className='text'>
                        <h1>INCENTIVE TRAVELS</h1>
                        <p>Motiva a tus colaboradores con un viaje de incentivo a increíbles destinos y complementa la experiencia con una agenda de actividades de integración y Team Building adaptada a las necesidades de tu empresa. Contamos con amplia experiencia a nivel nacional e internacional.</p>
                    </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselTravels