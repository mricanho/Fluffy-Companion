import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { asyncFetchimages, setPage } from '../actions';
import Photo from '../components/Photo';
import Spinner from '../components/Spinner';

const Home = ({ images, fetchimages, setPage }) => {
  const [filter, setFilter] = useState('images-human');
  useEffect(() => {
    if (images.page !== undefined) {
      fetchimages(filter, images.page);
    }
    if (images.filter !== undefined) {
      setFilter(images.filter);
      fetchimages(images.filter, images.page);
    }
  }, [images.filter, images.page]);

  const {
    list,
    loading,
  } = images;

  const pagination = [1, 2, 3, 4, 5];

  return (
    <>
      {
        loading ? (<Spinner />)
          : ''
      }
      <section className="hero is-large is-info">
        <div className="hero-body">

          <p className="title">
            Home Page
          </p>
          <p className="subtitle">
            Some content here
          </p>
        </div>
        <ul className="d-flex list-unstyled">
          {
            pagination.map((page) => (
              <li key={page}>
                <Link
                  to="/"
                  className="btn bg-green m-2"
                  onClick={
                    () => setPage(page)
                  }
                  alt={`Page ${page}`}
                >
                  {page}
                </Link>
              </li>
            ))
          }
        </ul>
        {
          loading ? (<Spinner />)
            : ''
        }
        <div className="d-flex flex-wrap">
          {list.map((dog) => (
            <Link
              key={dog.id}
              to={
                `/photos/${dog.id}`
              }
              className="col-12 col-md-4 p-2 mb-2"
            >
              <Photo photoContainer="photo-container" photoStyle="photo" key={dog.id} id={dog.id} url={dog.urls.small} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

Home.propTypes = {
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
  fetchimages: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  images: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchimages: (filter, page) => dispatch(asyncFetchimages(filter, page)),
  setPage: (page) => dispatch(setPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
