import { render, screen } from '@testProvider';

import React from 'react';
import Sidebar from '@components/nav/layout/Sidebar';

// Mock MenuContent since it's tested separately
jest.mock('@components/nav/layout/MenuContent', () => ({
  __esModule: true,
  default: ({ expanded, setExpanded }: any) => (
    <div role="menu-content" data-expanded={expanded} data-set-expanded={String(setExpanded)}></div>
  )
}));

const renderComponent = (props: {
  isExpanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  render(<Sidebar {...props} />);
};

test('renders Sidebar correctly', () => {
  const props = {
    isExpanded: true,
    setExpanded: jest.fn()
  };

  renderComponent(props);

  // Check if the Sidebar components are rendered with the correct props
  const menuContent = screen.getByRole('menu-content');
  const divider = screen.getByRole('separator');

  expect(menuContent).toBeInTheDocument();
  expect(menuContent).toHaveAttribute('data-expanded', 'true');

  // Accessing 'data-set-expanded' via dataset
  expect(menuContent.dataset.setExpanded).toBeDefined();

  expect(divider).toBeInTheDocument();
  expect(divider).toHaveAttribute('aria-orientation', 'vertical');
  expect(divider).toHaveStyle('border-right: 1px solid gray');
});
