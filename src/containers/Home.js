import React from 'react';
import { connect } from 'react-redux';
import '../index.css';
import PropTypes from 'prop-types';
import Filter from '../components/CategoryFilter';
import { setFilter } from '../actions';

const Home = ({ setFilter }) => {
  const handleClick = (filter) => {
    setFilter(filter);
  };

  return (
    <section className="hero is-large is-info">
      <div className="hero-body">
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
        <p className="title">
          Home Page
        </p>
        <p className="subtitle">
          Some content here
        </p>
      </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => (dispatch(setFilter(filter))),
});

Home.propTypes = {
  setFilter: PropTypes.func.isRequired,
  images: PropTypes.shape({
    list: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]).isRequired,
    loading: PropTypes.bool,
    filter: PropTypes.string,
    page: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.number],
    ),
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
