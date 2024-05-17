import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Cartagena360 from '../../assets/videos/Cartagena360.mp4';

function Carousel360() {
    return(
        <Carousel>
            <Carousel.Item>
                <div className='video-container'>
                    <video src={Cartagena360} autoPlay muted loop className='video_content'>
                    </video>
                    <div className='carousel-caption'>
                    <div className='text'>
                        <h1>VR PRODUCTIONS</h1>
                        <p>Crea experiencias narrativas y cortometrajes completamente inmersivos y sin límites para tu imaginación. Haz sentir al espectador parte de tu historia.</p>
                    </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carousel360