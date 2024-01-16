import { render, screen } from '@testProvider';

import AboutSection from '@app/about/AboutSection';

const sectionMock = {
  title: 'Mock Title',
  description: 'Mock Description',
  imageSrc: 'mockImage'
};

describe('AboutSection component', () => {
  test('renders without errors', () => {
    render(<AboutSection isEven={true} section={sectionMock} />);
    expect(screen.getByText('Mock Title')).toBeInTheDocument();
    expect(screen.getByText('Mock Description')).toBeInTheDocument();
  });
});
