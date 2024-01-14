import { render, screen } from '@testProvider';

import SkillSection from '@app/cv/SkillSection';

describe('SkillSection', () => {
  test('renders SkillSection correctly', () => {
    render(<SkillSection />);

    // Check if the SkillItem components are rendered with the specified values
    const frontEndSkill = screen.getByText('Front-end');
    const backEndSkill = screen.getByText('Back-end');
    const bddSkill = screen.getByText('BDD');
    const workflowSkill = screen.getByText('Workflow');

    expect(frontEndSkill).toBeInTheDocument();
    expect(backEndSkill).toBeInTheDocument();
    expect(bddSkill).toBeInTheDocument();
    expect(workflowSkill).toBeInTheDocument();
  });
});
