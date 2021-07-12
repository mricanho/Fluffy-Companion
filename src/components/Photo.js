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

Photo.defaultProps = {
  id: 'h2QPKvzieC4',
};

Photo.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  url: PropTypes.string.isRequired,
};

export default Photo;
