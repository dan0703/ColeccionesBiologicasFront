import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { useState } from 'react';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import BurstModeOutlinedIcon from '@mui/icons-material/BurstModeOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import { Divider, Slide } from '@mui/material';
import TopBarMenu from '../Componentes/TopBarMenu/TopBarMenu/TopBarMenu'
import UVLogo from '../Images/1200px-Logo_Universidad_Veracruzana.png';



const drawerWidth = 240;

const subOptions = {
    Ejemplares: ['Registrar', 'Visualizar', 'Etiquetas'],
    Colectores: ['Registrar', 'Visualizar'],
    Usuarios: ['Registrar', 'Visualizar'],
    Estadisticas: ['Vistas'],
    Solicitudes: ['Investigadores'],
  };

  const subIcons = {
    Registrar: <LibraryAddOutlinedIcon />,
    Visualizar: <LibraryBooksOutlinedIcon />,
    Etiquetas: <BurstModeOutlinedIcon />,
    Vistas: <StackedLineChartOutlinedIcon />,
    Investigadores: <LocalLibraryOutlinedIcon />,
  };
  

export default function Contact() {
    const [activeOption, setActiveOption] = useState(null);
    const [subMenuOpen, setSubMenuOpen] = useState(null);

    const handleOptionClick = (option) => {
        if (activeOption === option) {
        setActiveOption(null);
        setSubMenuOpen(null); 
        } else {
        setActiveOption(option);
        setSubMenuOpen(option);
        }
    };

    const uvLogoStyle = {
        alignSelf: 'center',
        marginLeft: '30%',
        backgroundColor: '#ffffff',
        width: '40%',
        height: 'auto',
        padding: '3px',
        boxSizing: 'border-box',
        marginTop: '15%',
        marginBottom: '15%',
      };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Box sx={{ overflow: 'auto', backgroundColor:"#0077b8" , height: '100%'}}>
            <img src={UVLogo} alt="Background" className="uv-logo"  style={uvLogoStyle}/>
          <List>
            {['Ejemplares', 'Colectores', 'Usuarios', 'Estadisticas', 'Solicitudes'].map((text, index) => (
              <div key={text}>
                <ListItem disablePadding onClick={() => handleOptionClick(text)}>
                  <ListItemButton>
                    <ListItemIcon>
                      {index === 0 ? <ListIcon /> : index === 1 ? <PeopleOutlinedIcon /> : index === 2 ? <PersonIcon /> : index === 3 ? <EqualizerIcon /> : <PersonAddAltIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
                {activeOption === text && (
                <Slide direction="down" in={activeOption === text} mountOnEnter unmountOnExit>
                    <List component="div" disablePadding sx={{ marginLeft: '20px',  transformOrigin: 'top'  }}>
                            {subOptions[text].map((subOptionText, subIndex) => (
                            <ListItem key={subIndex} disablePadding>
                                <ListItemButton>
                                <ListItemIcon>
                                    {subIcons[subOptionText]}
                                </ListItemIcon>
                                <ListItemText primary={subOptionText} />
                                </ListItemButton>
                            </ListItem>
                            ))}
                        </List>
                </Slide>
                )}
              </div>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar> 
            <TopBarMenu/> 
        </Toolbar>
        <Divider/>

        <Typography paragraph>
          1
        </Typography>
        <Typography paragraph>
          C2
        </Typography>
      </Box>
    </Box>
  );
}
