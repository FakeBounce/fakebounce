import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { act, fireEvent, render, screen } from '@testProvider';

import NavigationArrow from '@components/nav/layout/NavigationArrow';

describe('NavigationArrow', () => {
  test('renders back button correctly when not on the root path', () => {
    render(
      <Routes location={'/example/test'}>
        <Route path="/example/*" element={<NavigationArrow isExpanded={false} />} />
      </Routes>
    );

    const backButton = screen.getByTestId('back-button');
    expect(backButton).toBeInTheDocument();
  });

  test('does not render back button on the root path', () => {
    render(
      <Routes location={'/'}>
        <Route path="*" element={<NavigationArrow isExpanded={false} />} />
      </Routes>
    );

    const backButton = screen.queryByTestId('back-button');
    expect(backButton).toBeNull();
  });

  test('clicking the back button navigates to the root path', () => {

    render(
      <Routes location={'/example/test'}>
        <Route path="/example/*" element={<NavigationArrow isExpanded={false} />} />
      </Routes>
    );

    const backButton = screen.getByTestId('back-button');
    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton);
    expect(location.pathname).toBe('/');
  });
});
