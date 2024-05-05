import { Typography } from '@mui/material'
import React from 'react'

export default function Start() {
  return (

    <div>
      <Typography variant="h2" align="left" color="primary" gutterBottom style={{ marginTop: 20, fontWeight: 'bold' }}>
        Herbario CIB
      </Typography>
      <Typography variant="body1" paragraph fontSize={20}>
        Las colecciones científicas son una parte medular de los centros de información e 
        investigación de la diversidad biológica; en ellas se encuentran depositados ejemplares 
        representativos de organismos, poblaciones y especies, que fueron recolectados en un tiempo 
        y lugar determinados, además proveen datos adicionales que los acompañan (geográficos, 
        ecológicos, taxonómicos y nomenclaturales), así como colecciones accesorias, tales como 
        fotografías, ilustraciones, bibliografía, grabaciones y videos, entre otros. Lo anterior denota que 
        las colecciones biológicas albergan información para desarrollar investigaciones tales como 
        en biología comparada y que por lo tanto representan el marco de referencia del que hacer 
        taxonómico que a su vez constituye el sistema de comunicación de la biodiversidad.

        
      </Typography>
      <Typography variant="body2" paragraph fontSize={20}>
        La finalidad de la presente propuesta es generar una plataforma digital que permita la interacción 
        entre estudiantes e investigadores, así como público en general al hacer uso del material herborizado 
        contenido en el herbario CIB de la Universidad Veracruzana. Dicha plataforma pretende mostrar la 
        información curada de aproximadamente de 30 mil ejemplares de los cuales serán mostrados mediante imágenes, 
        mapas y bases de datos sistematizadas.
        
      </Typography>
    
  </div>
    
    
  )
}
