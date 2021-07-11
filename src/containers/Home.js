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
    <>
      <section className="hero is-large is-info">
        <div className="hero-body">
          <div>
            <div className="select">
              <Filter handleOnClick={handleClick} />
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
    </>
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
  fetchImages: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
