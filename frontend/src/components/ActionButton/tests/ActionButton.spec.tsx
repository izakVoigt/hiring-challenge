import { render, fireEvent, screen } from '@testing-library/react';
import { ActionButton } from '../index';

describe('ActionButton', () => {
  const mockOnClick = jest.fn();

  it('renders the button with the correct props', () => {
    render(<ActionButton color="primary" onClick={mockOnClick} title="Test" />);

    const component = screen.getByRole('button');

    expect(component).toHaveTextContent('Test');
  });

  it('calls the onClick function when the button is clicked', () => {
    render(<ActionButton color="primary" onClick={mockOnClick} title="Test" />);

    const component = screen.getByRole('button');

    fireEvent.click(component);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
