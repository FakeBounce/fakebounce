import { render, screen } from '@testProvider';

import Home from '@app/home';

// Mock the Greeting and HomeContentBoxes components
jest.mock('@app/home/Greeting', () => ({
  __esModule: true,
  default: () => <div data-testid="mocked-greeting"></div>
}));

jest.mock('@app/home/HomeContentBoxes', () => ({
  __esModule: true,
  default: () => <div data-testid="mocked-home-content-boxes"></div>
}));

describe('Home', () => {
  test('renders Home correctly', () => {
    render(<Home />);

    // Check if the Greeting and HomeContentBoxes components are rendered
    const greeting = screen.getByTestId('mocked-greeting');
    const homeContentBoxes = screen.getByTestId('mocked-home-content-boxes');

    expect(greeting).toBeInTheDocument();
    expect(homeContentBoxes).toBeInTheDocument();
  });
});
