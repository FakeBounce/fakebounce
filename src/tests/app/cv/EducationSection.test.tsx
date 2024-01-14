import { render, screen } from '@testProvider';

import EducationSection from '@app/cv/EducationSection';

describe('EducationSection', () => {
  test('renders EducationSection correctly', () => {
    render(<EducationSection />);

    // Check if the heading is rendered
    const heading = screen.getByText(/Formation/i);
    expect(heading).toBeInTheDocument();

    // Check if there are multiple elements with the text "ESGI"
    const schoolElements = screen.queryAllByText(/ESGI/i);
    expect(schoolElements.length).toBeGreaterThan(0);

    // Further assert on each individual school element
    schoolElements.forEach((schoolElement) => {
      expect(schoolElement).toBeInTheDocument();
    });

    // Similarly, you can check for other elements using queries and assertions
  });
});
