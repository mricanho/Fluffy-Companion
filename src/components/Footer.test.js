import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Footer from './Footer';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should render a Footer component', () => {
  act(() => {
    render(
      <Footer />,
      container,
    );
  });

  expect(container.innerHTML).toMatchSnapshot();
});
