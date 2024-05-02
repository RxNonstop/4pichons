import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import meeting from '../assets/svg/meeting_planers';

function CarouselVideo() {
    const [selectedCategory, setSelectedCategory] = useState('conocenos');
    const [enlaceSeleccionado, setEnlaceSeleccionado] = useState(null);
  
    const handleSelectCategory = (category, indice) => {
      setSelectedCategory(category);
      setEnlaceSeleccionado(indice);
    };
  
  return (
    <div className='carousel_videos'>
      {selectedCategory === 'conocenos' && (
      <Carousel>
        <Carousel.Item interval={5000}>
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
        <Carousel.Item interval={5000}>
          <div className='video-container'>
            <video src={video2} autoPlay muted loop className='video_content'>
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
      )}
      {selectedCategory === 'meeting' && (
      <Carousel>
        <Carousel.Item interval={5000}>
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
      )}
      {selectedCategory === 'vr' && (
      <Carousel>
        <Carousel.Item interval={5000}>
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
      )}
      {selectedCategory === 'travels' && (
      <Carousel>
        <Carousel.Item interval={5000}>
          <div className='video-container'>
            <video src={video1} autoPlay muted loop className='video_content'>
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
      )}
      {selectedCategory === 'team' && (
      <Carousel>
        <Carousel.Item interval={5000}>
          <div className='video-container'>
            <video src={video1} autoPlay muted loop className='video_content'>
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
      )}
      {selectedCategory === '360' && (
      <Carousel>
        <Carousel.Item interval={5000}>
          <div className='video-container'>
            <video src={video1} autoPlay muted loop className='video_content'>
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
      )}
      {selectedCategory === 'sf' && (
      <Carousel>
        <Carousel.Item interval={5000}>
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
      )}
      {selectedCategory === 'sa' && (
      <Carousel>
        <Carousel.Item interval={5000}>
          <div className='video-container'>
            <video src={video1} autoPlay muted loop className='video_content'>
            </video>
            <div className='carousel-caption'>
              <div className='text'>
                <h1>SUSTENTABLE ACTIVATIONS</h1>
                <p>Haz algo verde hoy y apoya el futuro! desarrolla de Forma más ecofriendly tus eventos corporativos con nosotros</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      )}
      <nav className='menu_carousel'>
        <ul>
          <li><a onClick={()=>handleSelectCategory('meeting',1)} className={enlaceSeleccionado == 1 ? "seleccionado" : ""}><img src={meeting}></img>Meeting planners</a></li>
          <li><a onClick={()=>handleSelectCategory('vr',2)} className={enlaceSeleccionado == 2 ? "seleccionado" : ""}>Virtual Reality</a></li>
          <li><a onClick={()=>handleSelectCategory('travels',3)} className={enlaceSeleccionado == 3 ? "seleccionado" : ""}>Incentive Travels</a></li>
          <li><a onClick={()=>handleSelectCategory('team',4)} className={enlaceSeleccionado == 4 ? "seleccionado" : ""}>Team Building</a></li>
          <li><a onClick={()=>handleSelectCategory('360',5)} className={enlaceSeleccionado == 5 ? "seleccionado" : ""}>360 & VR productions</a></li>
          <li><a onClick={()=>handleSelectCategory('sf',6)} className={enlaceSeleccionado == 6 ? "seleccionado" : ""}>Sustainable furniture</a></li>
          <li><a onClick={()=>handleSelectCategory('sa',7)} className={enlaceSeleccionado == 7 ? "seleccionado" : ""}>Sustainable activations</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default CarouselVideo;