import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import activations from '../../assets/images/slider-activations.png';
function CarouselSf() {
    return(
        <Carousel>
            <Carousel.Item>
                <div className='video-container'>
                    <img src={activations} alt="" className='img_slider'></img>
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