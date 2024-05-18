import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import teams from '../../assets/videos/slider_teams.mp4';
function CarouselTeam() {
    return(
        <Carousel>
            <Carousel.Item>
                <div className='video-container'>
                    <video src={teams} autoPlay muted loop className='video_content'>
                    </video>
                    <div className='carousel-caption'>
                    <div className='text'>
                        <h1>TEAM BUILDING</h1>
                        <p>Tenemos las dinámicas más divertidas dentro y fuera del país para ayudarte a lograr tus objetivos. Impulsamos equipos generando cambios positivos en las personas y organizaciones, mejorando el ambiente laboral y facilitando la generación de cambio.</p>
                    </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselTeam