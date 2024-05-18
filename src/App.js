import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './sections/Inicio';
import Contact from './sections/Contactanos';
import Slider from './sections/Slider';
import logo from './assets/images/6--Blanco.png';
import Gallery from './sections/Gallery';


function App() {
  const [selectedOption, setSelectedOption] = useState('inicio');
  
  const handleSelectedOption = (option) => {
    if(option !== selectedOption){
      setSelectedOption(option);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='container_header'>
          <div className='header1'>
            <img src={logo} className="logo" alt="logo" />
            <nav className='navbar'>
              <ul>
                <li><a href='#' onClick={()=>handleSelectedOption('inicio')}>INICIO</a></li>
                <li><a href='#' onClick={()=>handleSelectedOption('servicios')}>SERVICIOS</a></li>
                <li><a href='#slider'>CONOCENOS</a></li>
                <li><a href='#contactanos'>CONTACTANOS</a></li>
              </ul>
            </nav>
          </div>
          <div className='header2'>
            <button className='cotizaciones'>DEMOS</button>
          </div>
        </div>
      </header>
      {selectedOption === 'inicio' && (
        <Inicio></Inicio>
      )}
      {selectedOption === 'servicios' && (
        <Gallery></Gallery>
      )}
      <Slider></Slider>
      <Contact></Contact>
    </div>
  );
}

export default App;
