import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import logo from '../../../assets/logo.png';
import './Style.css';

function Navbar() {
  return (
    <div id="dv-topmenu">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Menu />
    </div>
  );
}

export default Navbar;
