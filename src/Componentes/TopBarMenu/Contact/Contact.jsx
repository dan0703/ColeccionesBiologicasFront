import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
export default function Contact() {
  return (
    <div>
      <Typography variant="h2" align="center" color="primary" gutterBottom style={{ marginTop: 20, fontWeight: 'bold' }}>
        Contacto
      </Typography>
      
      <Card sx={{ minWidth: 275 }}>
      <CardContent>

        <Typography variant="h6" component="div" style={{fontWeight: 'bold'}}>
          Telefono: 000 00000 ext 00
        </Typography>
        <Typography variant="h6" component="div" style={{fontWeight: 'bold'}}>
          Correo: herbarioCIB@uv.mx
        </Typography>
      </CardContent>
    </Card>
    </div>
    
  )
}
