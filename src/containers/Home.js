import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { asyncFetchImages, setPage } from '../actions';
import Photo from '../components/Photo';
import Spinner from '../components/Spinner';

const Home = ({ images, fetchImages, setPage }) => {
  const [filter, setFilter] = useState('dogs-human');
  useEffect(() => {
    if (images.page !== undefined) {
      fetchImages(filter, images.page);
    }
    if (images.filter !== undefined) {
      setFilter(images.filter);
      fetchImages(images.filter, images.page);
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
        <div className="d-flex flex-wrap">
          {list.map((image) => (
            <Link
              key={image.id}
              to={
                `/photos/${image.id}`
              }
              className="col-12 col-md-4 p-2 mb-2"
            >
              <Photo photoContainer="photo-container" photoStyle="photo" key={image.id} id={image.id} url={image.urls.small} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchImages: (filter, page) => dispatch(asyncFetchImages(filter, page)),
  setPage: (page) => dispatch(setPage(page)),
});

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
  fetchImages: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
