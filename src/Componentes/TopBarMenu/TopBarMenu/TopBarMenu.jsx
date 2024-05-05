import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';


export default function TopBarMenu({handleOptionClick}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const selectedLabel = event.target.textContent; 
    handleOptionClick(selectedLabel); 
  };

  return (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', bgcolor: 'background.paper' }}>
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
        <Tabs value={value} onChange={handleChange} centered indicatorColor=''>
          <Tab label="Inicio" sx={{ '&.Mui-selected': { color: 'green' }, fontSize: '1.2rem' }}/>
          <Tab label="Consulta" sx={{ '&.Mui-selected': { color: 'green' }, fontSize: '1.2rem'}}/>
          <Tab label="Nosotros" sx={{ '&.Mui-selected': { color: 'green' }, fontSize: '1.2rem' }}/>
          <Tab label="Contacto" sx={{ '&.Mui-selected': { color: 'green' }, fontSize: '1.2rem' }}/>
        </Tabs>
    </Box>
      <Button variant="contained" color="success" sx={{ fontSize: '1.2rem' }} >
        Login
      </Button>
      
  </Box>

  );
}