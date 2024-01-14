import { fireEvent, render, screen } from '@testProvider';

import PageDescriptionBox from '@app/home/PageDescriptionBox';

// Mock the useColorMode hook
jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useColorMode: jest.fn()
}));

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}));

describe('PageDescriptionBox', () => {
  test('renders PageDescriptionBox correctly', () => {
    // Mock light mode
    require('@chakra-ui/react').useColorMode.mockReturnValue({
      colorMode: 'light'
    });

    const navigateMock = jest.fn();
    require('react-router-dom').useNavigate.mockReturnValue(navigateMock);

    const props = {
      title: 'Example Title',
      text: 'Example Text',
      navigationUrl: '/example',
      image: 'example.jpg'
    };

    render(<PageDescriptionBox {...props} />);

    // Check if the PageDescriptionBox components are rendered with the correct props
    const titleText = screen.getByText(props.title);
    const descriptionText = screen.getByText(props.text);
    const imageElement = screen.getByAltText(`${props.title} Image`);
    const gridElement = screen.getByTestId('page-description-box');

    expect(titleText).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(gridElement).toBeInTheDocument();

    // Trigger a click event on the PageDescriptionBox and assert that navigate is called
    fireEvent.click(gridElement);
    expect(navigateMock).toHaveBeenCalledWith(props.navigationUrl);
  });
});
