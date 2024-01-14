import { fireEvent, render, screen } from '@testProvider';

import CVTitle from '@app/cv/CVTitle';

describe('CVTitle', () => {
  test('renders CVTitle correctly', () => {
    render(<CVTitle />);

    // Check if the "Curriculum Vitae" text is rendered
    const cvText = screen.getByText('Curriculum Vitae');
    expect(cvText).toBeInTheDocument();

    // Check if the download button is rendered
    const downloadButton = screen.getByTestId('download-button');
    expect(downloadButton).toBeInTheDocument();

    // Check if the download icon is rendered within the button
    const downloadIcon = screen.getByTestId('download-icon');
    expect(downloadIcon).toBeInTheDocument();
  });
});
