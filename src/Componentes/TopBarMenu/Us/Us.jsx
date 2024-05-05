import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Us() {
  return (
    <div >
      <Typography variant="h2" align="center" color="primary" gutterBottom style={{ marginTop: 20, fontWeight: 'bold' }}>
          Nosotros
        </Typography>
      <div className='Coordinador'>
        <Typography variant="h5" align="left" color="primary" gutterBottom style={{ marginTop: 20, fontWeight: 'bold'}}>
          Coordinador
        </Typography>
        
        <Card sx={{ minWidth: 275 }}>
          <CardContent>

            <Typography variant="h6" component="div" >
              Dr. Marco Antonio Espinoza Guzmán.- Facultad de Biología, región Xalapa,
              Universidad Veracruzana
            </Typography>
            
            <Link href="https://www.uv.mx/personal/maespinoza/datos-generales/" underline="hover" sx={{ fontSize: '1.2rem' }}>
              https://www.uv.mx/personal/maespinoza/datos-generales/
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className='Colaboradores'>
        <Typography variant="h5" align="left" color="primary" gutterBottom style={{ marginTop: 20, fontWeight: 'bold'}}>
          Colaboradores
        </Typography>
        
        <Card sx={{ minWidth: 275 }}>
          <CardContent>

            <Typography variant="h6" component="div" >
              Dra. Lili Martínez Domínguez.- Instituto de Investigaciones Biológicas Laboratorio
              de Taxonomía Integrativa. Herbario CIB, Universidad Veracruzana   
            </Typography>
          </CardContent>
        </Card>
        <div style={{ marginBottom: '20px' }} />
        <Card sx={{ minWidth: 275 }}>
          <CardContent>

            <Typography variant="h6" component="div" >
              Dr. Fernando Nicolalde Morejón.- Instituto de Investigaciones Biológicas
              Laboratorio de Taxonomía Integrativa. Herbario CIB, Universidad Veracruzana
            </Typography>
            
            <Link href="https://www.uv.mx/personal/enicolalde/" underline="hover" sx={{ fontSize: '1.2rem' }}>
            https://www.uv.mx/personal/enicolalde/
            </Link>
          </CardContent>
        </Card>

        <div style={{ marginBottom: '20px' }} />

        <Card sx={{ minWidth: 275 }}>
          <CardContent>

            <Typography variant="h6" component="div" >
              Mtro. Christian Pérez Salazar, Técnico Académico, Facultad de Estadística e
              Informática, Universidad Veracruzana.
            </Typography>
            
            <Link href=" https://www.uv.mx/personal/chperez/" underline="hover" sx={{ fontSize: '1.2rem' }}>
              https://www.uv.mx/personal/chperez/
            </Link>
          </CardContent>
        </Card>

        <div style={{ marginBottom: '20px' }} />

        <Card sx={{ minWidth: 275 }}>
          <CardContent>

            <Typography variant="h6" component="div" >
              Dra. María del Rosario Pineda López.- Centro de Ecoalfabetización y diálogo de
              saberes (EcoDialogo), Universidad Veracruzana.
            </Typography>
            
            <Link href="https://www.uv.mx/personal/rpineda/" underline="hover" sx={{ fontSize: '1.2rem' }}>
            https://www.uv.mx/personal/rpineda/
            </Link>
          </CardContent>
        </Card>

        <div style={{ marginBottom: '20px' }} />

        <Card sx={{ minWidth: 275 }}>
          <CardContent>

            <Typography variant="h6" component="div" >
              Mtra. Ana Luz Polo Estrella, Técnico Académico, Facultad de Estadística e 
              Informática, Universidad Veracruzana
            </Typography>
            
            <Link href="https://www.uv.mx/personal/apolo/ " underline="hover" sx={{ fontSize: '1.2rem' }}>
              https://www.uv.mx/personal/apolo/ 
            </Link>
          </CardContent>
        </Card>

        <div style={{ marginBottom: '20px' }} />

        <Card sx={{ minWidth: 275 }}>
          <CardContent>

            <Typography variant="h6" component="div" >
              Mtro. Carlos Alberto Ochoa Rivera, profesor de tiempo completo, facultad de 
              estadística e informática, Universidad Veracruzana.
            </Typography>
            
            <Link href="https://www.uv.mx/personal/cochoa/" underline="hover" sx={{ fontSize: '1.2rem' }} >
              https://www.uv.mx/personal/cochoa/
            </Link>
          </CardContent>
        </Card>

        <div style={{ marginBottom: '20px' }} />

        <Card sx={{ minWidth: 275 }}>
          <CardContent>

            <Typography variant="h6" component="div" >
              Jimena Campuzano Barradas, Estudiante de Licenciatura en Biología, Facultad    
              de Biología, Xalapa. 
            </Typography>
          </CardContent>
        </Card>

        <div style={{ marginBottom: '20px' }} />

        <Card sx={{ minWidth: 275 }}>
          <CardContent>

            <Typography variant="h6" component="div" >
              Aldo Ulises Colorado Díaz, Estudiante Licenciatura en Ingeniería de Software, 
              Facultad de Estadística e Informática.
            </Typography>
        
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
