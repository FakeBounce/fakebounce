import { fireEvent, render, screen } from '@testProvider';

import Layout from '@components/nav/layout/index'; // Adjust the import path as needed
import React from 'react';

// Mock components used by Layout
jest.mock('@components/nav/layout/Sidebar', () => ({
  __esModule: true,
  default: ({ isExpanded, setExpanded }: any) => (
    <div role="sidebar" data-is-expanded={isExpanded} data-set-expanded={String(setExpanded)}></div>
  )
}));

jest.mock('@components/nav/layout/ThemeChanger', () => ({
  __esModule: true,
  default: () => <div role="theme-changer"></div>
}));

jest.mock('@components/nav/layout/NavigationArrow', () => ({
  __esModule: true,
  default: ({ isExpanded }: any) => (
    <div role="navigation-arrow" data-is-expanded={isExpanded}></div>
  )
}));

jest.mock('@components/nav/layout/Footer', () => ({
  __esModule: true,
  default: () => <div role="footer"></div>
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Outlet: () => <div role="outlet"></div>
}));

const renderComponent = (props: { withSidebar: boolean }) => {
  render(<Layout {...props} />);
};

test('renders Layout correctly with sidebar', () => {
  const props = {
    withSidebar: true
  };

  renderComponent(props);

  // Check if the Sidebar component is rendered with the correct props
  const sidebar = screen.getByRole('sidebar');
  expect(sidebar).toBeInTheDocument();
  expect(sidebar).toHaveAttribute('data-is-expanded', 'true');
  expect(sidebar).toHaveAttribute('data-set-expanded');

  // Check if other components are rendered
  expect(screen.getByRole('theme-changer')).toBeInTheDocument();
  expect(screen.getByRole('navigation-arrow')).toBeInTheDocument();
  expect(screen.getByRole('outlet')).toBeInTheDocument();
  expect(screen.getByRole('footer')).toBeInTheDocument();
});

test('renders Layout correctly without sidebar', () => {
  const props = {
    withSidebar: false
  };

  renderComponent(props);

  // Check if the Flex component is rendered without sidebar
  const flexContainer = screen.getByTestId('flex-container'); // Add a data-testid to the Flex component
  expect(flexContainer).toBeInTheDocument();
  expect(flexContainer).toHaveStyle('width: 100vw; height: 100vh;');

  // Check if other components are rendered
  expect(screen.getByRole('outlet')).toBeInTheDocument();
});
