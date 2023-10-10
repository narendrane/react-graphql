import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { Amplify } from 'aws-amplify';
import App from './App';
jest.mock('aws-amplify');

describe('Index', () => {
  beforeEach(() => {
  });

test('renders App and validates heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/user types/i);
  expect(linkElement).toBeInTheDocument();
});

});
