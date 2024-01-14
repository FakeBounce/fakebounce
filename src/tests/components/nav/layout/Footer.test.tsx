import { render, screen } from '../../../../testProvider';

import Footer from '@components/nav/layout/Footer';

describe('Footer component', () => {
  it('renders contact information and GitHub icon', () => {
    render(<Footer />);

    // Check if the contact information is rendered
    expect(screen.getByText(/Contact me at/i)).toBeInTheDocument();
    expect(screen.getByText(/romanellibenjamin66@gmail.com/i)).toBeInTheDocument();

    // Check if the GitHub icon is rendered
    const githubIcon = screen.getByTestId('github-icon');
    expect(githubIcon).toBeInTheDocument();
    expect(githubIcon).toHaveClass('chakra-icon');
  });
});
