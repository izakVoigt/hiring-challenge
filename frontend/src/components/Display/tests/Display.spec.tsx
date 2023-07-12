import { render, screen } from '@testing-library/react';
import { Display } from '../index';

describe('Display', () => {
  it('renders the display component with the correct styles and children', () => {
    const mockChildren = <div>Mock Child Component</div>;

    render(<Display>{mockChildren}</Display>);

    const displayContainer = screen.getByRole('contentinfo');
    const childComponent = screen.getByText('Mock Child Component');

    expect(displayContainer).toBeInTheDocument();
    expect(displayContainer).toHaveStyle(`
      position: relative;
      width: 100vw;
      min-height: 100vh;
      background-color: #ebebeb;
      border: 2px solid #c8c8c8;
      border-radius: 10px;
    `);
    expect(childComponent).toBeInTheDocument();
  });
});
