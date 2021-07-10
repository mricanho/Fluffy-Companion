import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Logo" />
      </a>
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="/">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="/">
          <Link to="/" className="mr-3">Home</Link>
        </a>

        <a className="navbar-item" href="/">
          <Link to="/about">About</Link>
        </a>
      </div>
    </div>
  </nav>

);

export default NavBar;
