import React from 'react';
import Menu from './Menu';
import logo from '../../../assets/logo.png';
import './Style.css';

function Navbar() {
  return (
    <div id="dv-topmenu">
      <img src={logo} alt="logo" />
      <Menu />
    </div>
  );
}

export default Navbar;
