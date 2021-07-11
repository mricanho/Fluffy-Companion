import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({
  id,
  url,
  photoStyle,
  photoContainer,
}) => (
  <div className={`${photoContainer}`} key={id}>
    <img className={photoStyle} src={url} alt="Fluffy Companion" />
  </div>
);

Photo.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  url: PropTypes.string.isRequired,
  photoStyle: PropTypes.string.isRequired,
  photoContainer: PropTypes.string.isRequired,
};

export default Photo;
