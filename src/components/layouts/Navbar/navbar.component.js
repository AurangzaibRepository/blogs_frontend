import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return <nav className="navbar navbar-expand navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link">Blogs</Link>
      </li>
      <li className="nav-item">
        <Link to="/most-liked" className="nav-link">Most liked</Link>
      </li>
      <li className="nav-item">
        <Link to="/most-commented" className="nav-link">Most Commented</Link>
      </li>
    </ul>
  </nav>;
}

export default NavBar;
