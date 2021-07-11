import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CATEGORIES from '../actions/categories';

const Filter = ({ handleOnClick }) => (
  <div>
    {CATEGORIES.map((category) => (
      <Link
        to={`/category/${category.id}`}
        onClick={() => handleOnClick(category.url)}
        className="dropdown-item"
        key={category.id}
        aria-labelledby="dropdownMenuButton1"
      >
        {category.name}
      </Link>
    ))}
  </div>
);

Filter.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};

export default Filter;
