import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Colecta from './Colecta'
import Specimen from './Specimen'



export default function RecordSpecimens() {
  const [alignment, setAlignment] = React.useState('Specimen');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div>
      <div style={{ textAlign: 'center', marginTop:'1.2rem' }}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="Specimen" sx={{ fontSize: '1.2rem' }}>Ejemplar</ToggleButton>
          <ToggleButton value="Colecta" sx={{ fontSize: '1.2rem' }}>Colecta</ToggleButton>
        </ToggleButtonGroup>
      </div>
      {alignment === 'Specimen' && <Specimen />}
      {alignment === 'Colecta' && <Colecta />}

    </div>
  );
}
