import React, { useState } from 'react';
import './AdministratorMenu.css'; 
import LogoutButton from './LogoutButton';
import backgroundImage from '../../Images/1200px-Logo_Universidad_Veracruzana.png';

const AdministratorMenu = () => {
  const [isActive, setIsActive] = useState({
    ejemplares: false,
    colectores: false,
    usuarios: false,
    estadisticas: false,
    solicitudes: false,
  });


  const toggleDropdown = (menu) => {
    setIsActive({ ...isActive, [menu]: !isActive[menu] });
  };

  return (
    <nav className="navigation-bar">
      <img src={backgroundImage} alt="Background" className="background-image" />
      <ul className="menu-items">
        <li className="menu-item" onClick={() => toggleDropdown('ejemplares')}>
          Ejemplares
          {isActive.ejemplares && (
            <ul className="sub-menu">
              <li className="sub-menu-item" onClick={() => toggleDropdown('registrarEjemplares')}>
                Registrar
              </li>
              <li className="sub-menu-item" onClick={() => toggleDropdown('visualizarEjemplares')}>
                Visualizar
              </li>
              <li className="sub-menu-item" onClick={() => toggleDropdown('etiquetasEjemplares')}>
                Etiquetas
              </li>
            </ul>
          )}
        </li>
        <li className="menu-item" onClick={() => toggleDropdown('colectores')}>
          Colectores
          {isActive.colectores && (
            <ul className="sub-menu">
              <li className="sub-menu-item" onClick={() => toggleDropdown('registrarColectores')}>
                Registrar
              </li>
              <li className="sub-menu-item" onClick={() => toggleDropdown('visualizarColectores')}>
                Visualizar
              </li>
            </ul>
          )}
        </li>
        <li className="menu-item" onClick={() => toggleDropdown('usuarios')}>
          Usuarios
          {isActive.usuarios && (
            <ul className="sub-menu">
              <li className="sub-menu-item" onClick={() => toggleDropdown('registrarUsuarios')}>
                Registrar
              </li>
              <li className="sub-menu-item" onClick={() => toggleDropdown('visualizarUsuarios')}>
                Visualizar
              </li>
            </ul>
          )}
        </li>
        <li className="menu-item" onClick={() => toggleDropdown('estadisticas')}>
          Estadísticas
          {isActive.estadisticas && (
            <ul className="sub-menu">
              <li className="sub-menu-item" onClick={() => toggleDropdown('visitasEstadisticas')}>
                Visitas
              </li>
            </ul>
          )}
        </li>
        <li className="menu-item" onClick={() => toggleDropdown('solicitudes')}>
          Solicitudes
          {isActive.solicitudes && (
            <ul className="sub-menu">
              <li className="sub-menu-item" onClick={() => toggleDropdown('investigadoresSolicitudes')}>
                Investigadores
              </li>
            </ul>
          )}
        </li>
      </ul>
      <LogoutButton onClick={() => toggleDropdown('logout')} />
    </nav>
  );
};

export default AdministratorMenu;
