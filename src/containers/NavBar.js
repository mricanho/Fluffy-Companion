import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilter } from '../actions';
import Filter from '../components/CategoryFilter';

const NavBar = ({ setFilter }) => {
  const handleClick = (filter) => {
    setFilter(filter);
  };

  return (
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
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2" type="button">
                  <span>Categories</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                <div className="dropdown-content">
                  <Filter handleOnClick={handleClick} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => (dispatch(setFilter(filter))),
});

export default connect(null, mapDispatchToProps)(NavBar);
