import { render, screen } from '@testProvider';

import SkillItem from '@app/cv/SkillItem';

describe('SkillItem', () => {
  test('renders SkillItem correctly', () => {
    const props = {
      circularValue: 75,
      circularLabel: 'React',
      circularDescription: 'JavaScript library for building user interfaces'
    };

    render(<SkillItem {...props} />);

    // Check if the circular progress component and associated elements are rendered
    const circularProgress = screen.getByRole('progressbar');
    const circularLabel = screen.getByText('React');
    const circularDescription = screen.getByText('JavaScript library for building user interfaces');

    expect(circularProgress).toBeInTheDocument();
    expect(circularLabel).toBeInTheDocument();
    expect(circularDescription).toBeInTheDocument();
  });
});
