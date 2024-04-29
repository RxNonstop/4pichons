import Carousel from 'react-bootstrap/Carousel';
import video1 from '../assets/videos/video1.mp4'

function CarouselVideo() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className='video-container'>
          <video src={video1} autoPlay muted className='video_content'>
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