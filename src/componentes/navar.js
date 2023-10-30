import React from 'react';
import './navar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="logo" href="#">Logo</a>
        <div className="menu">
          <a href="#" className="menu-item">Inicio</a>
          <a href="#" className="menu-item">Acerca de</a>
          <a href="#" className="menu-item">Servicios</a>
          <a href="#" className="menu-item">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
