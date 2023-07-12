import { render, screen } from '@testing-library/react';
import { DisplayFooter } from '../index';

describe('DisplayFooter', () => {
  it('renders the display footer component with the correct styles and children', () => {
    const mockChildren = <div>Mock Footer Content</div>;

    render(<DisplayFooter>{mockChildren}</DisplayFooter>);

    const displayFooterContainer = screen.getByRole('contentinfo');
    const footerContent = screen.getByText('Mock Footer Content');

    expect(displayFooterContainer).toBeInTheDocument();
    expect(displayFooterContainer).toHaveStyle(`
      position: absolute;
      left: 0;
      bottom: 0;
      margin: 20px 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `);
    expect(footerContent).toBeInTheDocument();
  });
});
