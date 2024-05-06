import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Meeting from '../assets/svg/meeting_planers';
import Travels from '../assets/svg/travels';
import Teams from '../assets/svg/teams';
import Vr360 from '../assets/svg/vr360';
import Vr from '../assets/svg/vr';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function MenuLateral() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Meeting planners" icon={<Meeting/>} />
        <BottomNavigationAction label="Virtual Reality" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Incentive Travels" icon={<Travels/>} />
        <BottomNavigationAction label="Team Building" icon={<Teams/>} />
        <BottomNavigationAction label="360 & VR productions" icon={<Vr360 />} />
        <BottomNavigationAction label="Sustainable furniture" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Sustainable activations" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}