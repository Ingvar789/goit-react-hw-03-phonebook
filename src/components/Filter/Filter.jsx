import React from 'react';
import PropTypes from 'prop-types';
import { FilterStyled } from './Filter.styled';
const Filter = ({ value, onChange }) => (
  <FilterStyled>
    Find contacts by name
    <input
      type="text"
      className="filter-input"
      value={value}
      onChange={onChange}
    />
  </FilterStyled>
);
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
