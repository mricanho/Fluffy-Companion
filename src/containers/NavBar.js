import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <p className="title is-size-5 has-text-weight-bold has-text-black-bis">Fluffy Companion</p>
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
