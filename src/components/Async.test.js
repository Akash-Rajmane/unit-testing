import { render, screen, within } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  
  /*
  test('renders posts if request succeeds', async () => {
    render(<Async />)

    // Find the list element
    const listElement =  screen.getByRole('list');

    // Find the list item elements within the list
    const listItemElements = await within(listElement).findAllByRole('listitem');

    expect(listItemElements).not.toHaveLength(0);
  });
  */

  // mocking data
  test('renders posts if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }],
    });
    render(<Async />);

    // Find the list element
    const listElement =  screen.getByRole('list');

    // Find the list item elements within the list
    const listItemElements = await within(listElement).findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});