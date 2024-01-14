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

    // Check if the "Mon CV" navigation link is rendered
    const cvLink = screen.getByText('Mon CV');
    expect(cvLink).toBeInTheDocument();
    expect(cvLink).toHaveTextContent('Mon CV');
  });

  test('renders two anchor elements when expanded', () => {
    render(
      <Routes location={'/'}>
        <Route path="*" element={<NavigationLinksList expanded={true} />} />
      </Routes>
    );

    // Check if there are two anchor elements
    const anchorElements = screen.getAllByRole('link');
    expect(anchorElements).toHaveLength(2);
  });
});
