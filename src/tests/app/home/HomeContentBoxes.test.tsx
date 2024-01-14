import { render, screen } from '@testProvider';

import HomeContentBoxes from '@app/home/HomeContentBoxes';

// Mock the PageDescriptionBox component
jest.mock('@app/home/PageDescriptionBox', () => ({
  __esModule: true,
  default: ({ title, text, navigationUrl, image }: any) => (
    <div
      role="page-description-box"
      data-testid={`page-description-box-${title}`}
      data-title={title}
      data-text={text}
      data-navigation-url={navigationUrl}
      data-image={image}
    ></div>
  )
}));

describe('HomeContentBoxes', () => {
  test('renders HomeContentBoxes correctly', () => {
    render(<HomeContentBoxes />);

    // Check if the PageDescriptionBox components are rendered with the correct props
    const cvBox = screen.getByTestId('page-description-box-Mon expérience ?');
    const passionsBox = screen.getByTestId('page-description-box-Me découvrir ?');
    const othersBox = screen.getByTestId('page-description-box-Autre ?');

    expect(cvBox).toBeInTheDocument();
    expect(cvBox).toHaveAttribute('data-title', 'Mon expérience ?');
    expect(cvBox).toHaveAttribute('data-text', "Pour mon parcours de vie c'est ici !");
    expect(cvBox).toHaveAttribute('data-navigation-url', '/cv');
    expect(cvBox).toHaveAttribute('data-image', '/images//cv.png');

    expect(passionsBox).toBeInTheDocument();
    expect(passionsBox).toHaveAttribute('data-title', 'Me découvrir ?');
    expect(passionsBox).toHaveAttribute(
      'data-text',
      'Pour en apprendre plus sur moi et mes passions !'
    );
    expect(passionsBox).toHaveAttribute('data-navigation-url', '/passions');
    expect(passionsBox).toHaveAttribute('data-image', '/images//brain.png');

    expect(othersBox).toBeInTheDocument();
    expect(othersBox).toHaveAttribute('data-title', 'Autre ?');
    expect(othersBox).toHaveAttribute(
      'data-text',
      "Pour les rôlistes aguerris ou débutants, c'est par là !"
    );
    expect(othersBox).toHaveAttribute('data-navigation-url', '/autres');
    expect(othersBox).toHaveAttribute('data-image', '/images//roleplay.png');
  });
});
