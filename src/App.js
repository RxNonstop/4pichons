import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Inicio from './sections/inicio';
import Contact from './sections/contactanos';
import Slider from './sections/Slider';
import { Nav } from 'react-bootstrap';

import logo from './assets/images/6--Blanco.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container_header'>
          <div className='header1'>
            <img src={logo} className="logo" alt="logo" />
            <nav className='navbar'>
              <ul>
                <li><a href='#inicio'>INICIO</a></li>
                <li><a href='#'>SERVICIOS</a></li>
                <li><a href='#slider'>CONOCENOS</a></li>
                <li><a href='#contactanos'>CONTACTANOS</a></li>
              </ul>
            </nav>
          </div>
          <div className='header2'>
            <a href='.' className='demo'>DEMOS</a>
            <button className='cotizaciones'>COTIZACIONES</button>
          </div>
        </div>
      </header>
      <Inicio></Inicio>
      <Slider></Slider>
      <Contact></Contact>
    </div>
  );
}

export default App;
