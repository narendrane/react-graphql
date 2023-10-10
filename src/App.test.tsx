import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Index', () => {
test('renders App and validates heading', () => {
  render(<App />);
  const textElement = screen.getByText(/user types/i);
  const listElement = screen.getByTestId('customer-lists');
  expect(textElement).toBeInTheDocument();
  expect(listElement).toBeInTheDocument();
});

test('Should show the Radio buttons', async () => { 
    render(<App />);  
    const adminRadio = screen.getByLabelText('Admin');
    const managerRadio = screen.getByLabelText('Manager');
    expect(adminRadio).toBeChecked();
    fireEvent.click(managerRadio);
    expect(adminRadio).not.toBeChecked();
    expect(managerRadio).toBeChecked();
  });
});
