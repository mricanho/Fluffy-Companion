import React from 'react';
import PropTypes from 'prop-types';
import CATEGORIES from '../actions/categories';

const Filter = ({ selection }) => (
  <>
    <select className="select " name="category" id="filterCategory" onChange={(e) => selection(e.target.value)}>
      <option value="" disabled>
        Filter Category
      </option>
      {[...CATEGORIES].map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  </>
);
Filter.propTypes = {
  selection: PropTypes.func.isRequired,
};
export default Filter;