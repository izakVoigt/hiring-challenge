import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from '../index';

describe('Form', () => {
  const mockOnSubmit = jest.fn();
  const mockChildren = <div>Mock Form Content</div>;

  it('renders the form component with the correct onSubmit function', () => {
    render(<Form onSubmit={mockOnSubmit}>{mockChildren}</Form>);

    const form = screen.getByRole('form');
    const formContent = screen.getByText('Mock Form Content');

    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute('role', 'form');
    expect(formContent).toBeInTheDocument();
  });

  it('calls the onSubmit function when the form is submitted', () => {
    render(<Form onSubmit={mockOnSubmit}>{mockChildren}</Form>);

    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});
