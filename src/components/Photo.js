import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({
  id,
  url,
}) => (
  <figure className="image" key={id}>
    <img src={url} alt="Fluffy Companion" />
  </figure>
);

Photo.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  url: PropTypes.string.isRequired,
};

export default Photo;
