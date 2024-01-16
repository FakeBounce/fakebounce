import { Route, Routes } from 'react-router-dom';
import { act, fireEvent, render, screen } from '@testProvider';

import ErrorPage from '@components/ErrorPage';

describe('ErrorPage component', () => {
  test('renders without errors', () => {
    render(
      <Routes location={'/error'}>
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    );

    expect(screen.getByText('Oops! Une erreur est survenue.')).toBeInTheDocument();
    expect(
      screen.getByText("La page que vous essayez de voir n'existe pas :(")
    ).toBeInTheDocument();
    expect(screen.getByText("Retourner à l'accueil")).toBeInTheDocument();
  });

  test('calls navigate function when button is clicked', () => {
    render(
      <Routes location={'/error'}>
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    );

    const backButton = screen.getByText("Retourner à l'accueil");
    fireEvent.click(backButton);

    // Use act to wait for state updates (e.g., navigation)
    act(() => {});

    expect(location.pathname).toBe('/');
  });
});
