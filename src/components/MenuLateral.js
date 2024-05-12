import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Meeting from '../assets/svg/meeting_planers';
import Travels from '../assets/svg/travels';
import Teams from '../assets/svg/teams';
import Vr360 from '../assets/svg/vr360';
import Vr from '../assets/svg/vr';
import Sf from '../assets/svg/sf';
import Sa from '../assets/svg/sa';

export default function MenuLateral({onChange}) {
  const [menuOption, setMenuOption] = React.useState(null);

  const handleSelectCategory = (indice) => {
    setMenuOption(indice);
  };

  return (
    // <Box sx={{ width: 500}}>
    //   <BottomNavigation
    //     showLabels
    //     value={value}
    //     onChange={(event, newValue) => {
    //       setValue(newValue);
    //     }}
    //   >
    //     <BottomNavigationAction label="Meeting planners" icon={<Meeting/>} />
    //     <BottomNavigationAction label="Virtual Reality" icon={<Vr />} />
    //     <BottomNavigationAction label="Incentive Travels" icon={<Travels/>} />
    //     <BottomNavigationAction label="Team Building" icon={<Teams/>} />
    //     <BottomNavigationAction label="360 & VR productions" icon={<Vr360 />} />
    //     <BottomNavigationAction label="Sustainable furniture" icon={<Sf/>} />
    //     <BottomNavigationAction label="Sustainable activations" icon={<Sa/>} />
    //   </BottomNavigation>
    // </Box>
    <nav className='menu_lateral'>
        <ul>
          <li><a onClick={()=>{handleSelectCategory(1);onChange('meeting')}} className={menuOption == 1 ? "seleccionado" : ""}><Meeting></Meeting><span>Meeting planners</span></a></li>
          <li><a onClick={()=>{handleSelectCategory(2);onChange('vr')}} className={menuOption == 2 ? "seleccionado" : ""}><Vr></Vr><span>Virtual Reality</span></a></li>
          <li><a onClick={()=>{handleSelectCategory(3);onChange('travels')}} className={menuOption == 3 ? "seleccionado" : ""}><Travels></Travels><span>Incentive Travels</span></a></li>
          <li><a onClick={()=>{handleSelectCategory(4);onChange('team')}} className={menuOption == 4 ? "seleccionado" : ""}><Teams></Teams><span>Team Building</span></a></li>
          <li><a onClick={()=>{handleSelectCategory(5);onChange('360')}} className={menuOption == 5 ? "seleccionado" : ""}><Vr360></Vr360><span>360 & VR productions</span></a></li>
          <li><a onClick={()=>{handleSelectCategory(6);onChange('sf')}} className={menuOption == 6 ? "seleccionado" : ""}><Sf></Sf><span>Sustainable furniture</span></a></li>
          <li><a onClick={()=>{handleSelectCategory(7);onChange('sa')}} className={menuOption == 7 ? "seleccionado" : ""}><Sa></Sa><span>Sustainable activations</span></a></li>
        </ul>
      </nav>
  );
}