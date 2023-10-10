import React from 'react';
import { render, screen } from '@testing-library/react';
import { Amplify } from 'aws-amplify';
import App from './App';
jest.mock('aws-amplify');

describe('Index', () => {
  beforeEach(() => {
  });

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/user types/i);
  expect(linkElement).toBeInTheDocument();
})
});
