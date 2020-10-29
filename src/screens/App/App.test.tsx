import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

test('renders link in demo', () => {
  render(<App />);
  const linkElement = screen.getByRole('link');
  expect(linkElement).toBeInTheDocument();
});
