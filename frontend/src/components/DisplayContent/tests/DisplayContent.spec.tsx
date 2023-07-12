import { render, screen } from '@testing-library/react';
import { DisplayContent } from '../index';

describe('DisplayContent', () => {
  it('renders the display content component with the correct styles and children', () => {
    const mockChildren = (
      <>
        <div>Child Component 1</div>
        <div>Child Component 2</div>
      </>
    );

    render(<DisplayContent>{mockChildren}</DisplayContent>);

    const displayContentContainer = screen.getByRole('contentinfo');
    const childComponent1 = screen.getByText('Child Component 1');
    const childComponent2 = screen.getByText('Child Component 2');

    expect(displayContentContainer).toBeInTheDocument();
    expect(displayContentContainer).toHaveStyle(`
      margin-bottom: 100px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      gap: 12px;
    `);
    expect(childComponent1).toBeInTheDocument();
    expect(childComponent2).toBeInTheDocument();
  });
});
