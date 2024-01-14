import { render, screen } from '@testProvider';

import CV from '@app/cv';

// Mock each section component
jest.mock('@app/cv/CVTitle', () => () => <div data-testid="cv-title">Mock CVTitle</div>);
jest.mock('@app/cv/SkillSection', () => () => (
  <div data-testid="skill-section">Mock SkillSection</div>
));
jest.mock('@app/cv/JobSection', () => () => <div data-testid="job-section">Mock JobSection</div>);
jest.mock('@app/cv/EducationSection', () => () => (
  <div data-testid="education-section">Mock EducationSection</div>
));
jest.mock('@app/cv/LanguageSection', () => () => (
  <div data-testid="language-section">Mock LanguageSection</div>
));

describe('CV', () => {
  test('renders CV correctly', () => {
    render(<CV />);

    // Check if the mocked CVTitle component is rendered
    expect(screen.getByTestId('cv-title')).toBeInTheDocument();

    // Check if the mocked SkillSection component is rendered
    expect(screen.getByTestId('skill-section')).toBeInTheDocument();

    // Check if the mocked JobSection component is rendered
    expect(screen.getByTestId('job-section')).toBeInTheDocument();

    // Check if the mocked EducationSection component is rendered
    expect(screen.getByTestId('education-section')).toBeInTheDocument();

    // Check if another divider is rendered
    expect(screen.getAllByRole('separator').length).toBe(3);

    // Check if the mocked LanguageSection component is rendered
    expect(screen.getByTestId('language-section')).toBeInTheDocument();
  });
});
