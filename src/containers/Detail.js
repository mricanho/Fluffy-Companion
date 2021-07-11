import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { asyncFetchDetail } from '../actions';
import Photo from '../components/Photo';
import Spinner from '../components/Spinner';

const Detail = ({ images, fetchDetail }) => {
  const [image, setImage] = useState({ id: null, urls: { small: '' }, user: { name: '' } });
  const [loaded, setLoaded] = useState(false);
  const { imageId } = useParams();
  useEffect(() => {
    if (loaded === false) {
      fetchDetail(imageId, 1)
        .then(({ image }) => {
          setLoaded(true);
          setImage(image);
        });
    }
  }, [loaded]);

  const { loading } = images;

  const {
    urls,
    alt_description: alt,
    description,
    user: author,
  } = image;

  return (
    <>
      {
        loading ? (
          <Spinner />
        )
          : ''
      }
      <div className="columns">
        <div className="column is-half">
          <Photo id={imageId} url={urls.small} photoContainer="photo-detail-container" photoStyle="photo-detail" />
        </div>
        <div className="column is-half">
          <div><h4 className="is-size-1">{description}</h4></div>
          <div>{alt}</div>
          <div className="is-size-5">
            <span>Photo by: </span>
            <span>{author.name}</span>
          </div>
        </div>
      </div>
    </>
  );
};

Detail.propTypes = {
  images: PropTypes.shape({
    loading: PropTypes.bool,
    filter: PropTypes.string,
  }).isRequired,
  fetchDetail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  images: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetail: (id) => dispatch(asyncFetchDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
