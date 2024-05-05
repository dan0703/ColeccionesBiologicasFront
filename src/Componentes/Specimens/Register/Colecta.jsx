import React, { useState, useEffect } from 'react'
import { Typography, Box, FormControlLabel, Checkbox, TextField, Autocomplete } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


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

export default function Colecta() {
    const [countryList, setCountryList] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    const [stateList, setStateList] = useState([]);
    const [selectedState, setSelectedState] = useState('');

    const [cityList, setCityList] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    const [collectorList, setCollectorList] = useState([]);
    const [selectedCollector, setSelectedCollector] = useState('');

    const [accessToken, setAccessToken] = useState('');

    const loadStates = async (country) => {
        console.log(country)
        try {
            const response = await axios.get(`https://www.universal-tutorial.com/api/states/${country}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept': 'application/json'
                }
            });
            setStateList(response.data);
        } catch (error) {
            console.error('Error al cargar los estados:', error);
        }
    };

    const loadCities = async (state) => {
        try {
            const response = await axios.get(`https://www.universal-tutorial.com/api/cities/${state}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept': 'application/json'
                }
            });
            setCityList(response.data);
        } catch (error) {
            console.error('Error al cargar las ciudades:', error);
        }
    };

    const handleCountryChange = (event) => {
        const selectedCountryName = event.target.value;
        setSelectedCountry(selectedCountryName);
        setSelectedState('');
        const selectedCountryObj = countryList.find(country => country.country_short_name === selectedCountryName);
        if (selectedCountryObj) {
            loadStates(selectedCountryObj.country_name);
        } else {
            console.error(`No se encontró el país correspondiente al nombre: ${selectedCountryName}`);
        }
    };

    const handleStateChange = (event) => {
        const selectedStateName = event.target.value;
        setSelectedCity('');
        setSelectedState(selectedStateName);
        loadCities(selectedStateName);
    };
    

    useEffect(() => {

        axios.get('http://localhost:5243/Colector/GetCollerctorsList')
        .then(response => {
            if (response.data && response.data.$values && Array.isArray(response.data.$values)) {
                const collectors = response.data.$values.map(collector => ({
                    id: collector.idColector,
                    label: collector.nombre, 
                }));
                setCollectorList(collectors);
            } else {
                console.error('Error: El formato de datos recibidos para la lista de colectores no es el esperado.');
            }
        })
        .catch(error => {
            console.error('Error al obtener la lista de familias:', error);
        });

        const fetchToken = async () => {
        try {
            const response = await axios.get('https://www.universal-tutorial.com/api/getaccesstoken', {
            headers: {
                'Accept': 'application/json',
                'api-token': 'n2V_KB3ZzMfci68VG0L6P8Dn4e9Y5a8M0Nlr-MFt7ywHG_Ydndu8ZV21_QvmDyimZ_0',
                'user-email': 'dansegura8863@gmail.com'
            }
            });
            setAccessToken(response.data.auth_token);
        } catch (error) {
            if (error.response) {
            console.error('Error al obtener el token de acceso:', error.response.data);
            } else {
            console.error('Error al obtener el token de acceso:', error.message);
            }
        }
        };

        fetchToken();
        // Realizar la solicitud al API de países
        axios.get('https://www.universal-tutorial.com/api/countries/', {
            headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/json'
            }
        })
        .then(response => {
            setCountryList(response.data);
        })
        .catch(error => {
            console.error('Error al obtener la lista de países:', error);
        });
        }, [accessToken]
    );

    const [protectedChecked, setProtectedChecked] = useState(false);

    const handleProtectedChange = (event) => {
        setProtectedChecked(event.target.checked);
    };

  return (
        <div>
            <Typography variant="h5" align="center" color="primary" gutterBottom style={{ marginTop: 20, fontWeight: 'normal' }}>
                Colecta
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
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="Fecha de Colecta" sx={{ width: 350 }} />
                    </LocalizationProvider>                </div>
                <div>
                    <TextField label="Numero de colecta" id="textfield-colecta-number" defaultValue=" " sx={{ width: 350}}/>
                </div>
                <div>
                    <FormControl sx={{ width: 350 }}>
                        <InputLabel id="select-country">País</InputLabel>
                        <Select
                            labelId="select-country"
                            id="select-country"
                            value={selectedCountry}
                            onChange={handleCountryChange}
                        >
                            {countryList.map((country) => (
                                <MenuItem key={country.country_short_name} value={country.country_short_name}>
                                    {country.country_name}
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
                        <InputLabel id="select-state">Estado</InputLabel>
                        <Select
                            labelId="select-state"
                            id="select-state"
                            value={selectedState}
                            onChange={handleStateChange}
                        >
                            {stateList.map((state) => (
                                <MenuItem key={state.state_name} value={state.state_name}>
                                {state.state_name}
                            </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ width: 350 }}>
                        <InputLabel id="select-municipality">Municipio</InputLabel>
                        <Select
                            labelId="select-municipality"
                            id="select-municipality"
                            value={selectedCity}
                            onChange={(event) => {
                                setSelectedCity(event.target.value);

                            }}
                        >
                            {cityList.map((city) => (
                                <MenuItem key={city.city_name} value={city.city_name}>
                                {city.city_name}
                            </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ width: 350 }}>
                        <InputLabel id="select-locality">Localidad</InputLabel>
                        <Select
                            labelId="select-locality"
                            id="select-locality"
                            value={selectedCity}
                            onChange={(event) => {
                            }}
                        >
                            {cityList.map((city) => (
                                <MenuItem key={city.city_name} value={city.city_name}>
                                {city.city_name}
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
                    <TextField label="Latitud" id="textfield-colecta-latitud" defaultValue=" " sx={{ width: 350 }} />
                </div>
                <div>
                    <TextField label="Longitud" id="textfield-colecta-longitud" defaultValue=" " sx={{ width: 350 }} />
                </div>
                <div>
                    <TextField label="Altitud" id="textfield-colecta-altitud" defaultValue=" " sx={{ width: 350 }} />
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
                        <InputLabel id="select-collector">Colector</InputLabel>
                        <Select
                            labelId="select-collector"
                            id="select_collector"
                            value={selectedCollector}
                            onChange={(event) => {
                                setSelectedCollector(event.target.value);
                            }}
                        >
                            {collectorList.map((collector) => (
                                <MenuItem key={collector.id} value={collector.id}>
                                    {collector.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <Button variant="contained" sx={{ width: 350, fontSize:'1rem'}}>Agregar colectores asociados</Button>
                </div>
                <div>
                    <Button variant="contained" sx={{ width: 350, fontSize:'1rem' }}>Registrar nuevo Colector</Button>
                </div>
            </Box>

            <div style={{marginTop:'30px'}}>
                <Button
                    sx={{ width: 340, fontSize:'.8rem' }}
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<AddPhotoAlternateIcon />}
                    >
                    Img. de libreta de campo
                    <VisuallyHiddenInput type="file" />
                </Button>
            </div>
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <Button variant="contained" color="success" sx={{ width: '200px', height: '50px', fontSize:'1.2rem' }}>
                    Registrar
                </Button>
            </div>


        </div>
    )
}
