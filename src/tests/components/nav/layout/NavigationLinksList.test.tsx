import { Route, Routes } from 'react-router-dom';
import { render, screen } from '@testProvider';

import NavigationLinksList from '@components/nav/layout/NavigationLinksList';

describe('NavigationLinksList', () => {
  test('renders navigation links correctly when expanded', () => {
    render(
      <Routes location={'/'}>
        <Route path="*" element={<NavigationLinksList expanded={true} />} />
      </Routes>
    );

    // Check if the "Accueil" navigation link is rendered
    const accueilLink = screen.getByText('Accueil');
    expect(accueilLink).toBeInTheDocument();
    expect(accueilLink).toHaveTextContent('Accueil');

    // Check if the "CV" navigation link is rendered
    const cvLink = screen.getByText('CV');
    expect(cvLink).toBeInTheDocument();
    expect(cvLink).toHaveTextContent('CV');

    // Check if the "A propos" navigation link is rendered
    const aboutLink = screen.getByText('A propos');
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveTextContent('A propos');

    // Check if the "CV" navigation link is rendered
    const autreLink = screen.getByText('Autre');
    expect(autreLink).toBeInTheDocument();
    expect(autreLink).toHaveTextContent('Autre');
  });

  test('renders four anchor elements when expanded', () => {
    render(
      <Routes location={'/'}>
        <Route path="*" element={<NavigationLinksList expanded={true} />} />
      </Routes>
    );

    // Check if there are two anchor elements
    const anchorElements = screen.getAllByRole('link');
    expect(anchorElements).toHaveLength(4);
  });
});
