import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import video1 from '../assets/videos/video1.mp4'

function CarouselVideo() {
    const [selectedCategory, setSelectedCategory] = useState('conocenos');
  
    const handleSelectCategory = (category) => {
      setSelectedCategory(category);
    };
  
  return (
    <Carousel>
      <Carousel.Item>
        <div className='video-container'>
          <video src={video1} autoPlay muted loop className='video_content'>
          </video>
          <div className='carousel-caption'>
            <div className='text'>
              <h1>¿quienes somos?</h1>
              <p>Una empresa líder en la creación y ejecución de eventos corporativos innovadores desde el punto de diseño hasta la coordinación.</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='video-container'>
          <video src={video1} autoPlay muted loop className='video_content'>
          </video>
          <div className='carousel-caption'>
            <div className='text'>
              <h1>¿que ofrecemos?</h1>
              <p>Nos enorgullece ofrecer una amplia gama de servicios  diseñados para llevar tus eventos corporativos al siguiente nivel. Nuestro objetivo es brindar experiencias únicas y memorables que impulsen el éxito de su empresa.</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselVideo;