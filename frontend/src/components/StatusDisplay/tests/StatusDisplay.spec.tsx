import { render, screen } from '@testing-library/react';
import { StatusDisplay } from '../index';

describe('StatusDisplay', () => {
  const color = 'red';

  it('renders the status display component with the correct color', () => {
    render(<StatusDisplay color={color} />);

    const statusDisplay = screen.getByRole('status');

    expect(statusDisplay).toBeInTheDocument();
    expect(statusDisplay).toHaveStyle(`
      border-color: ${color};
    `);
  });
});
