import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Metting_planners from '../assets/svg/meeting_planers';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
        <BottomNavigationAction label="Meeting planners" icon={<LocationOnIcon/>} />
        <BottomNavigationAction label="Virtual Reality" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Incentive Travels" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Team Building" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="360 & VR productions" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Sustainable furniture" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Sustainable activations" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}