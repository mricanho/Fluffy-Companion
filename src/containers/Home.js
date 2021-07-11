import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { asyncFetchimages, setPage } from '../actions';
import Photo from '../components/Photo';
import Spinner from '../components/Spinner';

const Home = ({ images, fetchimages, setPage }) => {
  const [filter, setFilter] = useState('pet');
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

  const pagination = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {
        loading ? (<Spinner />)
          : ''
      }
      <section className="hero is-large is-info">
        <div className="container">
          <div className="hero-body">
            <p className="title has-text-centered">
              Choose Your Fluffy Companion
            </p>
            <p className="subtitle mb-6 has-text-centered">
              Life it&#39;s better when you share
            </p>
            <div className="columns">
              {list.map((image) => (
                <Link
                  key={image.id}
                  to={
                    `/photos/${image.id}`
                  }
                  className="column is-one-third"
                >
                  <Photo photoContainer="photo-container" photoStyle="photo" key={image.id} id={image.id} url={image.urls.small} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <nav className="pagination is-rounded">
          <ul className="pagination-list">
            {
              pagination.map((page) => (
                <li key={page}>
                  <Link
                    to="/"
                    className="pagination-link"
                    aria-label="Goto page 1"
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

        </nav>
        {
          loading ? (<Spinner />)
            : ''
        }
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
