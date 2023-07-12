import { render, screen } from '@testing-library/react';
import { DisplayHeader } from '../index';

describe('DisplayHeader', () => {
  it('renders the display header component with the correct styles and children', () => {
    const mockChildren = <div>Mock Header Content</div>;

    render(<DisplayHeader>{mockChildren}</DisplayHeader>);

    const displayHeaderContainer = screen.getByRole('contentinfo');
    const headerContent = screen.getByText('Mock Header Content');

    expect(displayHeaderContainer).toBeInTheDocument();
    expect(displayHeaderContainer).toHaveStyle(`
      margin: 20px 0;
    `);
    expect(headerContent).toBeInTheDocument();
  });
});
