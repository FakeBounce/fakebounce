import { render, screen } from '@testProvider';

import JobSection from '@app/cv/JobSection';
import { jobsList } from '@app/cv/JobList';

describe('JobSection', () => {
  test('renders JobSection correctly', () => {
    render(<JobSection />);

    // Check if the heading is rendered
    const heading = screen.getByText('Expériences en tant que développeur');
    expect(heading).toBeInTheDocument();

    // Check if the correct number of job items are rendered
    const jobItems = screen.queryAllByTestId(/^job-item-/);
    expect(jobItems.length).toBe(jobsList.length);
  });
});
