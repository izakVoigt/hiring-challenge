import { fireEvent, render, screen } from '@testing-library/react';
import { ToggleCheckbox } from '../index';

describe('ToggleCheckbox', () => {
  const mockOnChange = jest.fn();

  it('renders the toggle checkbox component with the correct attributes', () => {
    render(<ToggleCheckbox checked={false} onChange={mockOnChange} />);

    const toggleCheckboxLabel = screen.getByRole('contentinfo');
    const toggleCheckboxInput = screen.getByRole('checkbox');
    const toggleCheckboxSpan = screen.getByRole('figure');

    expect(toggleCheckboxLabel).toBeInTheDocument();
    expect(toggleCheckboxInput).toBeInTheDocument();
    expect(toggleCheckboxSpan).toBeInTheDocument();
    expect(toggleCheckboxInput).toHaveAttribute('type', 'checkbox');
  });

  it('calls the onChange function when the checkbox is toggled', () => {
    render(<ToggleCheckbox checked={false} onChange={mockOnChange} />);

    const toggleCheckboxInput = screen.getByRole('checkbox');

    fireEvent.click(toggleCheckboxInput);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
