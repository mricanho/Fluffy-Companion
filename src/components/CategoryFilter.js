import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CATEGORIES from '../actions/categories';

const Filter = ({ handleOnClick }) => (
  <div className="dropdown">
    <div className="dropdown-trigger">
      <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2" type="button">
        <span>Categories</span>
      </button>
    </div>
    <div className="dropdown-menu" id="dropdown-menu2" role="menu">
      <dropdown className="dropdown-content">
        {CATEGORIES.map((category) => (
          <Link
            to={`/category/${category.id}`}
            onClick={() => handleOnClick(category.url)}
            className="dropdown-item"
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </dropdown>
    </div>
  </div>
);

Filter.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};

export default Filter;
