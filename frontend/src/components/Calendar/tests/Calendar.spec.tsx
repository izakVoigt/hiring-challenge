import { render, screen } from '@testing-library/react';
import { Calendar } from '../index';

describe('Calendar', () => {
  it('renders the calendar component with the correct elements and roles', () => {
    render(<Calendar />);

    const calendarContainer = screen.getByRole('contentinfo');
    const calendarIconContainer = screen.getByRole('figure');
    const title = screen.getByRole('textbox');

    expect(calendarContainer).toBeInTheDocument();
    expect(calendarContainer).toHaveStyle(`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: #3c3c3c;
    `);
    expect(calendarIconContainer).toBeInTheDocument();
    expect(calendarIconContainer).toHaveStyle(`
      border: 2px solid #5bb4cf;
      border-radius: 10px;
    `);
    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle(`
      margin: 0 16px;
      font-weight: 500;
    `);
    expect(title).toHaveTextContent('Timeline');
  });
});
