import { render, screen } from '@testProvider';

import JobItem from '@app/cv/JobItem';

describe('JobItem', () => {
  test('renders JobItem correctly', () => {
    const props = {
      jobImage: '/path/to/job/image.png',
      jobCompany: 'Sample Company',
      jobDate: 'January 2022 - Present',
      jobTitle: 'Software Developer',
      jobDescription: 'Responsible for developing and maintaining web applications.'
    };

    render(<JobItem {...props} />);

    // Check if the JobItem components are rendered with the specified values
    const companyText = screen.getByText('Sample Company');
    const dateText = screen.getByText('January 2022 - Present');
    const titleText = screen.getByText('Software Developer');
    const descriptionText = screen.getByText(
      'Responsible for developing and maintaining web applications.'
    );

    expect(companyText).toBeInTheDocument();
    expect(dateText).toBeInTheDocument();
    expect(titleText).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();
  });
});
