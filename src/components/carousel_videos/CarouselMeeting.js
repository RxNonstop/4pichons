import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import video1 from '../../assets/videos/meeting_planners.mp4';
function CarouselMeeting() {
    return(
        <Carousel>
            <Carousel.Item>
                <div className='video-container'>
                    <video src={video1} autoPlay muted loop className='video_content'>
                    </video>
                    <div className='carousel-caption'>
                    <div className='text'>
                        <h1>MEETING PLANNERS</h1>
                        <p>En nuestra empresa, combinamos la última tecnología en inteligencia artificial y realidad virtual para crear experiencias únicas que dejarán una impresión duradera en tus clientes y colaboradores. Nuestro equipo de expertos en Meeting Planners se encargará de cada detalle, desde la conceptualización hasta la ejecución, garantizando que tu evento sea memorable y exitoso.</p>
                    </div>
                    </div>
                </div>
            </Carousel.Item>
      </Carousel>
    )
}

export default CarouselMeeting