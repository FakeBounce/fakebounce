import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testProvider';

import MenuContent from '@components/nav/layout/MenuContent';
import { useIsMobile } from '../../../../const';

// Mock the setExpanded function
const mockSetExpanded = jest.fn();

// Mock the useIsMobile hook
jest.mock('../../../../const', () => ({
  ...jest.requireActual('../../../../const'), // Use the actual implementation for everything except useIsMobile
  useIsMobile: jest.fn()
}));

describe('MenuContent component', () => {
  beforeEach(() => {
    // Reset the mock function's state before each test
    mockSetExpanded.mockClear();
  });

  it('renders the header and handles click', () => {
    // Mock useIsMobile to return false
    (useIsMobile as jest.Mock).mockReturnValue(false);

    render(<MenuContent expanded={false} setExpanded={mockSetExpanded} />);

    // Check if the header is rendered
    const header = screen.getByText('Fakebounce');
    expect(header).toBeInTheDocument();

    // Simulate a click on the header
    fireEvent.click(header);

    // Check if the setExpanded function is called
    expect(mockSetExpanded).toHaveBeenCalledTimes(1);
  });

  it('does not handle click on header when isMobile is true', () => {
    // Mock useIsMobile to return true
    (useIsMobile as jest.Mock).mockReturnValue(true);

    render(<MenuContent expanded={false} setExpanded={mockSetExpanded} />);

    // Check if the header is rendered
    const header = screen.getByText('Fakebounce');
    expect(header).toBeInTheDocument();

    // Simulate a click on the header
    fireEvent.click(header);

    // Check if the setExpanded function is not called
    expect(mockSetExpanded).not.toHaveBeenCalled();
  });
});
