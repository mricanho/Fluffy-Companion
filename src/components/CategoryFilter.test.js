import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Filter from './CategoryFilter';

const handleClick = () => true;

describe('Filter', () => {
  test('renders CategoryFilter component', () => {
    render(<Filter handleOnClick={() => handleClick()} />, { wrapper: MemoryRouter });
    screen.getByText(/Cuys/);
  });
});
