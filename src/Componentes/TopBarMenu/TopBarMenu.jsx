import React, { useState } from 'react';
import './TopBarMenu.css';

export default function TopBarMenu() {
  const [selectedButton, setSelectedButton] = useState('Inicio');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const getButtonStyle = (buttonName) => {
    return buttonName === selectedButton ? { color: 'green' } : {};
  };

  return (
    <div className="top-section">
      <button style={{ ...getButtonStyle('Inicio'), backgroundColor: 'transparent', border: 'none' }} onClick={() => handleButtonClick('Inicio')}>Inicio</button>
      <button style={{ ...getButtonStyle('Consulta'), backgroundColor: 'transparent', border: 'none' }} onClick={() => handleButtonClick('Consulta')}>Consulta</button>
      <button style={{ ...getButtonStyle('Nosotros'), backgroundColor: 'transparent', border: 'none' }} onClick={() => handleButtonClick('Nosotros')}>Nosotros</button>
      <button style={{ ...getButtonStyle('Contacto'), backgroundColor: 'transparent', border: 'none' }} onClick={() => handleButtonClick('Contacto')}>Contacto</button>
      <div className="login-button-container" style={{position: "absolute", left: 1200, top: 12, bottom: 0, width: "10%", height: "10%"}}>
        <button style={getButtonStyle('Login')} className="login-button" onClick={() => handleButtonClick('Login')}>Contacto</button>
      </div>
    </div>
  );
  
}
