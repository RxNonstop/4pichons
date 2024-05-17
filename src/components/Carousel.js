import React, {useState} from 'react';
import Meeting from '../assets/svg/meeting_planers';
import Travels from '../assets/svg/travels';
import Teams from '../assets/svg/teams';
import Vr360 from '../assets/svg/vr360';
import Vr from '../assets/svg/vr';
import Sf from '../assets/svg/sf'
import Sa from '../assets/svg/sa';
import CarouselConocenos from './carousel_videos/CarouselConocenos';
import CarouselMeeting from './carousel_videos/CarouselMeeting';
import CarouselVr from './carousel_videos/CarouselVr';
import CarouselTravels from './carousel_videos/CarouselTravels';
import CarouselTeam from './carousel_videos/CarouselTeam';
import Carousel360 from './carousel_videos/Carousel360';
import CarouselSf from './carousel_videos/CarouselSf';
import CarouselSa from './carousel_videos/CarouselSa';

function CarouselPrincipal() {
    const [selectedCategory, setSelectedCategory] = useState('conocenos');
    const [enlaceSeleccionado, setEnlaceSeleccionado] = useState(null);
  
    const handleSelectCategory = (category, indice) => {
      setSelectedCategory(category);
      setEnlaceSeleccionado(indice);
    };
  
  return (
    <div className='carousel_videos'>
      {selectedCategory === 'conocenos' && (
        <CarouselConocenos></CarouselConocenos>
      )}
      {selectedCategory === 'meeting' && (
        <CarouselMeeting></CarouselMeeting>
      )}
      {selectedCategory === 'vr' && (
        <CarouselVr></CarouselVr>
      )}
      {selectedCategory === 'travels' && (
        <CarouselTravels></CarouselTravels>
      )}
      {selectedCategory === 'team' && (
        <CarouselTeam></CarouselTeam>
      )}
      {selectedCategory === '360' && (
        <Carousel360></Carousel360>
      )}
      {selectedCategory === 'sf' && (
        <CarouselSf></CarouselSf>
      )}
      {selectedCategory === 'sa' && (
        <CarouselSa></CarouselSa>
      )}
      <nav className='menu_carousel'>
        <ul>
          <li><a onClick={()=>handleSelectCategory('meeting',1)} className={enlaceSeleccionado == 1 ? "seleccionado" : ""}><Meeting></Meeting><span>Meeting planners</span></a></li>
          <li><a onClick={()=>handleSelectCategory('vr',2)} className={enlaceSeleccionado == 2 ? "seleccionado" : ""}><Vr></Vr><span>Virtual Reality</span></a></li>
          <li><a onClick={()=>handleSelectCategory('travels',3)} className={enlaceSeleccionado == 3 ? "seleccionado" : ""}><Travels></Travels><span>Incentive Travels</span></a></li>
          <li><a onClick={()=>handleSelectCategory('team',4)} className={enlaceSeleccionado == 4 ? "seleccionado" : ""}><Teams></Teams><span>Team Building</span></a></li>
          <li><a onClick={()=>handleSelectCategory('360',5)} className={enlaceSeleccionado == 5 ? "seleccionado" : ""}><Vr360></Vr360><span>360 & VR productions</span></a></li>
          <li><a onClick={()=>handleSelectCategory('sf',6)} className={enlaceSeleccionado == 6 ? "seleccionado" : ""}><Sf></Sf><span>Sustainable furniture</span></a></li>
          <li><a onClick={()=>handleSelectCategory('sa',7)} className={enlaceSeleccionado == 7 ? "seleccionado" : ""}><Sa></Sa><span>Sustainable activations</span></a></li>
        </ul>
      </nav>
    </div>
  );
}

export default CarouselPrincipal;