import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
import React from 'react';
describe('Index', () => {
test('renders App and validates heading', async () => {
  await act(() => {
    render(<App />);
  }); 
  const textElement = screen.getByText(/user types/i);
  const listElement = screen.getByTestId('customer-lists');
  expect(textElement).toBeInTheDocument();
  expect(listElement).toBeInTheDocument();
});

test('Should show the Radio buttons', async () => { 
    await act(() => {
      render(<App />);
    }); 
    const adminRadio = screen.getByLabelText('Admin');
    const managerRadio = screen.getByLabelText('Manager');
    expect(adminRadio).toBeChecked();
    await act(() => {
      fireEvent.click(managerRadio);
    });   
    expect(adminRadio).not.toBeChecked();
    expect(managerRadio).toBeChecked();
  });
});
