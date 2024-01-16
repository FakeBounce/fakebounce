import { render, screen } from '@testProvider';

import About from '@app/about';

describe('About component', () => {
  test('renders without errors', () => {
    render(<About />);
    expect(screen.getByText('A propos')).toBeInTheDocument();
  });
});
