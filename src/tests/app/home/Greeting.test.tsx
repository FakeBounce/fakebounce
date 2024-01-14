import { render, screen } from '@testProvider';

import Greeting from '@app/home/Greeting';

// Mock the useColorMode hook
jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useColorMode: jest.fn()
}));

describe('Greeting', () => {
  test('renders Greeting correctly in light mode', () => {
    // Mock light mode
    require('@chakra-ui/react').useColorMode.mockReturnValue({
      colorMode: 'light'
    });

    render(<Greeting />);

    // Check if the greeting text and description are rendered
    const greetingText = screen.getByText(/Bonjour,/i);
    const nameText = screen.getByTestId('greeting-name');
    const descriptionText = screen.getByText(/Je suis un ingénieur du web/i);

    expect(greetingText).toBeInTheDocument();
    expect(nameText).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();

    // Check if the name is rendered in green for light mode
    const greenName = screen.getByText('Benjamin');
    expect(greenName).toHaveStyle('color: green.600');
  });

  test('renders Greeting correctly in dark mode', () => {
    // Mock dark mode
    require('@chakra-ui/react').useColorMode.mockReturnValue({
      colorMode: 'dark'
    });

    render(<Greeting />);

    // Check if the greeting text and description are rendered
    const greetingText = screen.getByText(/Bonjour,/i);
    const nameText = screen.getByTestId('greeting-name');
    const descriptionText = screen.getByText(/Je suis un ingénieur du web/i);

    expect(greetingText).toBeInTheDocument();
    expect(nameText).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();

    // Check if the name is rendered in green for dark mode
    const greenName = screen.getByText('Benjamin');
    expect(greenName).toHaveStyle('color: green.300');
  });
});
