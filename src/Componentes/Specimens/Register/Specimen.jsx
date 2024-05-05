import React, { useState, useEffect } from 'react'
import { Typography, Box, FormControlLabel, Checkbox, TextField, Autocomplete } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const families = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    
  ];

export default function Specimen() {
    const [protectedChecked, setProtectedChecked] = useState(false);

    const [specimenList, setSpecimenList] = useState([]);
    const [selectedSpecimen, setSelectedSpecimen] = useState('');


    const [familyList, setFamilyList] = useState([]);
    const [selectedFamily, setSelectedFamily] = useState('');

    const [genderList, setGenderList] = useState([]);
    const [selectedGender, setSelectedGender] = useState('');

    const [floorList, setFloorList] = useState([]);
    const [selectedFloor, setSelectedFloor] = useState('');

    const [fruitList, setFruitList] = useState([]);
    const [selectedFruit, setSelectedFruit] = useState('');

    const [biologicalFormList, setBiologicalFormList] = useState([]);
    const [selectedBiologicalForm, setSelectedBiologicalForm] = useState('');

    const [vegetationTypeList, setVegetationTypeList] = useState([]);
    const [selectedVegetation, setSelectedVegetation] = useState('');


    
    const handleProtectedChange = (event) => {
        setProtectedChecked(event.target.checked);
    };
    
    useEffect(() => {

        //Lista de formas biologicas
        axios.get('http://localhost:5243/FormaBiologica/GetBiologicalFormList')
            .then(response => {
                if (response.data && response.data.$values && Array.isArray(response.data.$values)) {
                    const biologicalForms = response.data.$values.map(biologicalForms => ({
                        id: biologicalForms.idFormaBiologica,
                        label: biologicalForms.nombre, 
                    }));
                    setBiologicalFormList(biologicalForms);
                } else {
                    console.error('Error: El formato de datos recibidos para la lista de tipos de formas biologicas no es el esperado.');
                }
            })
            .catch(error => {
                console.error('Error al obtener la lista de formas biologicas:', error);
            });

        //Lista de tipos de vegetacion
        axios.get('http://localhost:5243/TipoVegetacion/GetVegetationTypeList')
            .then(response => {
                if (response.data && response.data.$values && Array.isArray(response.data.$values)) {
                    const vegetations = response.data.$values.map(vegetation => ({
                        id: vegetation.idTipoVegetacion,
                        label: vegetation.nombre, 
                    }));
                    setVegetationTypeList(vegetations);
                } else {
                    console.error('Error: El formato de datos recibidos para la lista de tipos de vegetacion no es el esperado.');
                }
            })
            .catch(error => {
                console.error('Error al obtener la lista de vegetacion:', error);
            });

        //Lista de frutos
        axios.get('http://localhost:5243/Fruto/GetFruitList')
            .then(response => {
                if (response.data && response.data.$values && Array.isArray(response.data.$values)) {
                    const fruits = response.data.$values.map(fruit => ({
                        id: fruit.idFruto,
                        label: fruit.nombre, 
                    }));
                    setFruitList(fruits);
                } else {
                    console.error('Error: El formato de datos recibidos para la lista de frutos no es el esperado.');
                }
            })
            .catch(error => {
                console.error('Error al obtener la lista de frutos:', error);
            });

        //Lista de suelos
        axios.get('http://localhost:5243/Suelo/GetFloorList')
            .then(response => {
                if (response.data && response.data.$values && Array.isArray(response.data.$values)) {
                    const floors = response.data.$values.map(floor => ({
                        id: floor.idSuelo,
                        label: floor.nombre, 
                    }));
                    setFloorList(floors);
                } else {
                    console.error('Error: El formato de datos recibidos para la lista de suelos no es el esperado.');
                }
            })
            .catch(error => {
                console.error('Error al obtener la lista de suelos:', error);
            });

        //Lista de familias
        axios.get('http://localhost:5243/Familia/GetFamilyList')
            .then(response => {
                if (response.data && response.data.$values && Array.isArray(response.data.$values)) {
                    const families = response.data.$values.map(family => ({
                        id: family.idFamilia,
                        label: family.nombre, 
                    }));
                    setFamilyList(families);
                } else {
                    console.error('Error: El formato de datos recibidos para la lista de familias no es el esperado.');
                }
            })
            .catch(error => {
                console.error('Error al obtener la lista de familias:', error);
            });

        //Lista de Generos
        axios.get('http://localhost:5243/Genero/GetGenderList')
            .then(response => {
                if (response.data && response.data.$values && Array.isArray(response.data.$values)) {
                    const genders = response.data.$values.map(gender => ({
                        id: gender.idGenero,
                        label: gender.nombre, 
                    }));
                    setGenderList(genders);
                } else {
                    console.error('Error: El formato de datos recibidos para la lista de generos no es el esperado.');
                }
            })
            .catch(error => {
                console.error('Error al obtener la lista de generos:', error);
            });

        //Lista de Especies
        axios.get('http://localhost:5243/Especie/GetSpecimenList')
            .then(response => {
                console.log(response.data);
                if (response.data && response.data.$values && Array.isArray(response.data.$values)) {
                    const specimens = response.data.$values.map(specimen => {
                        return {
                            id: specimen.idEspecie,
                            label: specimen.nombre,
                        };
                    });
                    setSpecimenList(specimens);
                } else {
                    console.error('Error: El formato de datos recibidos no es el esperado.');
                }
            })
            .catch(error => {
                console.error('Error al obtener la lista de especímenes:', error);
            });
    }, []);
  return (
    <div>
            <Typography variant="h5" align="center" color="primary" gutterBottom style={{ marginTop: 20, fontWeight: 'normal' }}>
                Ejemplar
            </Typography>

            <div style={{ marginBottom: '25px' }} />
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',  
                    alignItems: 'center',  
                    justifyContent: 'center', 
                    gap: '4rem', 
                }}
                noValidate
                autoComplete="off"
            >
                <div >
                    <TextField label="Nombre Cientifico" id="textfield-cientific-name" sx={{ width: 350 }} />
                </div>
                <div>
                    <TextField label="Especimen ID" id="textfield-specimen-id"  sx={{ width: 350}}/>
                </div>
                <div>
                    <FormControl sx={{ width: 350 }}>
                        <InputLabel id="select-specimens_family">Familia</InputLabel>
                        <Select
                            labelId="select-specimens_family"
                            id="select_family"
                            value={selectedFamily}
                            onChange={(event) => {
                                setSelectedFamily(event.target.value);
                            }}
                        >
                            {familyList.map((family) => (
                                <MenuItem key={family.id} value={family.id}>
                                    {family.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </Box>

            <div style={{ marginBottom: '30px' }} />
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',  
                    alignItems: 'center',  
                    justifyContent: 'center', 
                    gap: '4rem', 
                }}
                noValidate
                autoComplete="off"
            >
                <div >
                    <FormControl sx={{ width: 350 }}>
                        <InputLabel id="select-specimens-gender">Genero</InputLabel>
                        <Select
                            labelId="select-specimens-gender"
                            id="select_gender"
                            value={selectedGender}
                            onChange={(event) => {
                                setSelectedGender(event.target.value);
                            }}
                        >
                            {genderList.map((gender) => (
                                <MenuItem key={gender.id} value={gender.id}>
                                    {gender.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div>

                    <FormControl sx={{ width: 350 }}>
                        <InputLabel id="select-specimens-specimen">Especies</InputLabel>
                        <Select
                            labelId="select-specimens-specimen"
                            id="select_specimen"
                            value={selectedSpecimen}
                            onChange={(event) => {
                                setSelectedSpecimen(event.target.value);
                            }}
                        >
                            {specimenList.map((specimen2) => (
                                <MenuItem key={specimen2.id} value={specimen2.id}>
                                    {specimen2.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ width: 350 }}>
                        <InputLabel id="select-specimen-biologicalForm">Forma Biologica</InputLabel>
                        <Select
                            labelId="select-specimen-biologicalForm"
                            id="biologicalForm"
                            value={selectedBiologicalForm}
                            onChange={(event) => {
                                if (event.target.value !== undefined) {
                                    setSelectedBiologicalForm(event.target.value);
                                }                            }}
                        >
                            {biologicalFormList.map((biologicalForm) => (
                                <MenuItem key={biologicalForm.id} value={biologicalForm.id}>
                                    {biologicalForm.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </Box>

            <div style={{ marginBottom: '30px' }} />
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',  
                    alignItems: 'center',  
                    justifyContent: 'center', 
                    gap: '4rem', 
                }}
                noValidate
                autoComplete="off"
            >
                <div >
                    <FormControl sx={{ width: 350 }}>
                        <InputLabel id="select-vegetation-type">Tipo de Vegetacion</InputLabel>
                        <Select
                            labelId="select-vegetation-type"
                            id="select_vegetationtype"
                            value={selectedVegetation}
                            onChange={(event) => {
                                setSelectedVegetation(event.target.value);
                            }}
                        >
                            {vegetationTypeList.map((vegetationType) => (
                                <MenuItem key={vegetationType.id} value={vegetationType.id}>
                                    {vegetationType.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ width: 350 }}>
                        <InputLabel id="select-specimens-floor">Suelo</InputLabel>
                        <Select
                            labelId="select-specimens-floor"
                            id="select_specimensfloor"
                            value={selectedFloor}
                            onChange={(event) => {
                                setSelectedFloor(event.target.value);
                            }}
                        >
                            {floorList.map((floor) => (
                                <MenuItem key={floor.id} value={floor.id}>
                                    {floor.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ width: 350 }}>
                        <InputLabel id="select-specimens-fruit">Fruto</InputLabel>
                        <Select
                            labelId="select-specimens-fruit"
                            id="select_specimensfroit"
                            value={selectedFruit}
                            onChange={(event) => {
                                setSelectedFruit(event.target.value);
                            }}
                        >
                            {fruitList.map((fruit) => (
                                <MenuItem key={fruit.id} value={fruit.id}>
                                    {fruit.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </Box>

            <div style={{ marginBottom: '30px' }} />
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',  
                    alignItems: 'center',  
                    justifyContent: 'center', 
                    gap: '4rem', 
                }}
                noValidate
                autoComplete="off"
            >
                <div >
                <Autocomplete
                        disablePortal
                        id="combo-box-specimens-vegetation-flower"
                        options={families}
                        sx={{ width: 350 }}
                        renderInput={(params) => <TextField {...params} label="Flor" />}
                    />
                </div>
                <div>
                <Autocomplete
                        disablePortal
                        id="combo-box-specimens-associated"
                        options={families}
                        sx={{ width: 350 }}
                        renderInput={(params) => <TextField {...params} label="asociada" />}
                    />
                </div>
                <div>
                    <Autocomplete
                        disablePortal
                        id="combo-box-specimens-lifecycle"
                        options={families}
                        sx={{ width: 350 }}
                        renderInput={(params) => <TextField {...params} label="Ciclo de vida" />}
                    />
                </div>
            </Box>

            <div style={{ marginBottom: '50px' }} />
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',  
                    alignItems: 'center',  
                    justifyContent: 'center', 
                    gap: '4rem', 
                }}
                noValidate
                autoComplete="off"
            >
                <div >
                    <TextField label="Determino" id="textfield-cientific-determino" sx={{ width: 350 }} />
                </div>
                <div>
                    <TextField label="Nombre local" id="textfield-specimen-local-name"  sx={{ width: 350}}/>
                </div>
                <div>
                    <TextField label="Size" id="textfield-specimen-size" sx={{ width: 350}}/>
                </div>
            </Box>
            <div style={{ marginBottom: '25px' }} />

            <FormControlLabel
                control={<Checkbox checked={protectedChecked} onChange={handleProtectedChange} />}
                label="Protegido"
            />

            <div style={{marginTop:'30px'}}>
                <TextField label="Otros Datos" id="textfield-cientific-name" sx={{ width: 600, marginRight: 12}} />
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<AddPhotoAlternateIcon />}
                    >
                    Subir Imagen
                    <VisuallyHiddenInput type="file" />
                </Button>
            </div>

            <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <Button variant="contained" color="success" sx={{ width: '200px', height: '50px', fontSize:'1.2rem' }}>
                    Siguiente
                </Button>
            </div>


        </div>
    )
}
