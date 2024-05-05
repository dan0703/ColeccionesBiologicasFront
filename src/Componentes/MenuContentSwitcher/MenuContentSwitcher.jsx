import React from 'react'
import RecordSpecimens from '../Specimens/Register/RecordSpecimens'
import GenerateTag from '../Specimens/Tag/GenerateTag';
import Tag from '../Specimens/Tag/Tag';

import ViewSpecimens from '../Specimens/View/ViewSpecimens';
import RecordUser from '../Users/Register/RecordUser';
import RegisterCollectors from '../Collectors/Register/RegisterCollector';
import ViewCollectors from '../Collectors/View/ViewCollectors';
import ViewUsers from '../Users/View/ViewUsers';
import Visits from '../Statistics/Visits';
import InvestigatorRequests from '../Requests/Investigator/Investigator';
import Start from '../TopBarMenu/Start/Start';
import Us from '../TopBarMenu/Us/Us';
import Contact from '../TopBarMenu/Contact/Contact';
import Consult from '../TopBarMenu/Consult/Consult';
import Container from '@mui/material/Container';

const MenuContentSwitcher = ({ selectedOption }) => {
  let content = null;

  switch (selectedOption) {
    case 'RegistrarEjemplares':
      content = <div> <RecordSpecimens/> </div>;
      break;
    case 'VisualizarEjemplares':
      content = <div> <ViewSpecimens/> </div>;
      break;
    case 'EtiquetasEjemplares':
      content = <div> <GenerateTag/> </div>;
      break;
    case 'RegistrarColectores':
      content = <div> <RegisterCollectors/> </div>;
      break;
    case 'VisualizarColectores':
      content = <div> <ViewCollectors/> </div>;
      break;
    case 'RegistrarUsuarios':
      content = <div> <RecordUser/> </div>;
      break;
    case 'VisualizarUsuarios':
        content = <div> <ViewUsers/> </div>;
        break;
    case 'VistasEstadisticas':
      content = <div> <Visits/> </div>;
      break;
    case 'InvestigadoresSolicitudes':
      content = <div> <InvestigatorRequests/> </div>;
      break;
    case 'Inicio':
      content = <div> <Start/> </div>;
      break;
    case 'Consulta':
      content = <div> <Consult/> </div>;
      break;
    case 'Nosotros':
      content = <div> <Us/> </div>;
      break;
    case 'Contacto':
      content = <div> <Contact/> </div>;
      break;

    default:
      content = <div> <Start/> </div>;
  }

  return (
    <Container  style={{ backgroundColor: "white"}}>
      <div className="MenuContentSwitcher">
      {content}
    </div>
    </Container>
    
  );
};

export default MenuContentSwitcher;