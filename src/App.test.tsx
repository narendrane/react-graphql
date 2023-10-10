import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
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
/*describe('Mock Fetch', () => {
  let originFetch: any;
  beforeEach(() => {
    originFetch = (global as any).fetch;
  });
  afterEach(() => {
    (global as any).fetch = originFetch;
  });
  it('should pass', async () => {
    const customerData = {
      data: {
        listZellerCustomers: {
          items: [
            { name: 'John Doe', email:'john@gmail.com', id:'0482', role:'MANAGER' },
            { name: 'Jane Smith', email:'smith@gmail.com', id:'0482', role:'MANAGER'},
          ]
        }
      }
    }
    const fakeResponse = customerData;
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
    (global as any).fetch = mockedFetch;
    await act(() => {
      render(<App />);
    });
    screen.debug();
    expect(mockedFetch).toBeCalledTimes(1);
    expect(mRes.json).toBeCalledTimes(1);
  });
});*/
