import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="navbar navbar-expand navbar-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/hire" className="nav-link">Hire</Link>
        </li>
        <li className="nav-item">
          <Link to="/blogs" className="nav-link">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;