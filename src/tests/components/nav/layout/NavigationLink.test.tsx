import NavigationLink, { NavigationLinkProps } from '@components/nav/layout/NavigationLink';
import { render, screen } from '@testProvider';

import React from 'react';

// Mock ReactRouterLink
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => <a href={to}>{children}</a>
}));

const renderComponent = (props: NavigationLinkProps) => {
  render(<NavigationLink {...props} />);
};

test('renders NavigationLink correctly', () => {
  const props: NavigationLinkProps = {
    expanded: true,
    text: 'Home',
    icon: <div data-testid="icon" />,
    to: '/home'
  };

  renderComponent(props);

  // Check if the link is rendered with the correct text and icon
  const link = screen.getByRole('link', { name: /home/i });
  const icon = screen.getByTestId('icon');

  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/home');
  expect(icon).toBeInTheDocument();

  // Check if the text is visible when expanded
  const text = screen.getByText(/home/i);
  expect(text).toBeVisible();

  // Check if the font size is adjusted when expanded
  expect(text).toHaveStyle({ fontSize: 'sm' });
});
