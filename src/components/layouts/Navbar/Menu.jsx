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
          <Link to="/work-with-me" className="nav-link">Hire</Link>
        </li>
        <li className="nav-item">
          <Link to="/blogs" className="nav-link">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link to="/courses" className="nav-link">Courses</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
