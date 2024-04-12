// LogoutButton.js
import React from 'react';

const LogoutButton = ({ onClick }) => {
  return (
    <button className="logout-button" onClick={onClick}>
      Logout
    </button>
  );
};

export default LogoutButton;
