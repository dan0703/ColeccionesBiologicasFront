import React, { useState, useRef, useEffect } from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import * as htmlToImage from 'html-to-image';
import axios from 'axios';


const HerbarioCIB = () => {
  const [ejemplar, setEjemplar] = useState(null);
  const [nombreCientifico, setNombreCientifico] = useState('');
  const [familia, setFamilia] = useState('');
  const [determinante, setDeterminante] = useState('Det. por J. F. Pruski, 2018. Flora Mesoamericana, Feb 2020.');
  const [ubicacion, setUbicacion] = useState('Chiltoyac, camino al Tronconal. (19°34′20″N, 96°51′40″W). Alt.: 980m/3214ft.');
  const [descripcion, setDescripcion] = useState('hierba terrestre, abundante, de 80 cm de altura; flor blanca. Planta anual');
  const [habitat, setHabitat] = useState('vegetación ruderal. Suelo arcilloso.');
  const [nombreComun, setNombreComun] = useState('Mozote');
  const [uso, setUso] = useState('medicinal');
  const [fechaColeccion, setFechaColeccion] = useState('13 Ago 1986');
  const [colector, setColector] = useState('con V. Vázquez T.');
  const [numeroRegistro, setNumeroRegistro] = useState('Capturado en la base de datos de CIB (1064UV)');
  const cardRef = useRef(null);
  const [idEjemplar, setIdEjemplar] = useState(null); 

    useEffect(() => {
      const getIdEjemplarFromUrl = () => {
        const params = new URLSearchParams(window.location.search); 
        const idEjemplarParam = params.get('idEjemplar'); 
        if (idEjemplarParam !== null) {
          setIdEjemplar(parseInt(idEjemplarParam));
        }
      };
      getIdEjemplarFromUrl();

      const fetchEjemplar = async () => {
        try {
          const response = await fetch(`http://localhost:5243/Ejemplar/GetEjemplarById/${idEjemplar}`);
          const data = await response.json();
          setEjemplar(data);
          if (data) {
            setNombreCientifico(data.nombreCientifico);
            setFamilia(data.familia);
            setNombreComun(data.nombreLocal);
            setFechaColeccion(new Date(data.fechaColecta).toLocaleDateString()); // Convertir la fecha al formato deseado
          }
        } catch (error) {
          console.error('Error al obtener los detalles del ejemplar:', error);
        }
      };

      fetchEjemplar();
    }, [idEjemplar]);

  const handleDownload = () => {
    htmlToImage.toJpeg(cardRef.current, { quality: 0.95 })
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = 'herbario_cib.jpg';
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <div>
      <Card ref={cardRef} sx={{ width: 550, height: 600 }}>
        <CardContent>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Herbario CIB
          </Typography>
          <Typography variant="h6" component="h3" sx={{ textAlign: 'center' }}>
            Instituto de Investigaciones Biológicas
          </Typography>
          <Typography variant="body1" sx={{textAlign: 'center', marginTop:'0px' }}>
            Plantas de Xalapa Enriquez, Veracruz, México
          </Typography>
          <CardMedia
            image="public/logo512.png" // Deja esta imagen vacía para que puedas colocar la tuya
            title="Imagen de la planta"
          />
          <Typography variant="body1" sx={{ marginTop: '10px', textAlign: 'center' }}>
            <strong>{nombreCientifico}</strong>
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px', textAlign: 'center' }}>
            <strong>{familia}</strong>
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px', textAlign: 'center' }}>
            <strong>Determinante:</strong> {determinante}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px'}}> 
            <strong>Ubicación:</strong> {ubicacion}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px'}}>
            <strong>Descripción:</strong > {descripcion}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px'}}>
            <strong>Hábitat:</strong> {habitat}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px'}}>
            <strong>Nombre común:</strong> {nombreComun}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px'}}>
            <strong>Uso:</strong> {uso}
          </Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body1" sx={{ marginTop: '10px', textAlign: 'left' }}>
            <strong>Colector:</strong> {colector}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px', textAlign: 'right' }}>
            <strong>Fecha de colección:</strong> {fechaColeccion}
          </Typography>
        </div>

          <Typography variant="body1" sx={{ marginTop: '10px', textAlign: 'center' }}>
            <strong>Número de registro:</strong> {numeroRegistro}
          </Typography>        
        </CardContent>
      </Card>
      <Button  onClick={handleDownload} variant="contained" color="primary" sx={{marginTop:'400px', display: 'block', margin: 'auto'}}>
          Descargar Etiqueta
      </Button>
    </div>
    
  );
};

export default HerbarioCIB;
