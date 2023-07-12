import { render, screen } from '@testing-library/react';
import { StyledTextField } from '../index';

describe('StyledTextField', () => {
  it('renders the styled text field component with the correct styles', () => {
    render(<StyledTextField />);

    const textField = screen.getByRole('textbox');

    expect(textField).toBeInTheDocument();
  });
});
