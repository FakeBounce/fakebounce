import { render, screen } from '@testProvider';

import LanguageSection from '@app/cv/LanguageSection';

describe('LanguageSection', () => {
  test('renders LanguageSection correctly', () => {
    render(<LanguageSection />);

    // Check if the heading is rendered
    const heading = screen.getByText('Langues');
    expect(heading).toBeInTheDocument();

    // Check if the French and English language sections are rendered
    const frenchText = screen.getByText('Français');
    const englishText = screen.getByText('Anglais');

    expect(frenchText).toBeInTheDocument();
    expect(englishText).toBeInTheDocument();
  });
});
