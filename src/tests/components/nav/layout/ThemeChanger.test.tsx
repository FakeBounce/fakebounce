import { fireEvent, render, screen } from '@testProvider';

import React from 'react';
import ThemeChanger from '@components/nav/layout/ThemeChanger'; // Adjust the import path as needed

test('renders ThemeChanger correctly', () => {
  render(<ThemeChanger />);

  // Check if the button is rendered
  const themeChangerButton = screen.getByRole('button');
  expect(themeChangerButton).toBeInTheDocument();

  // Check if the button has the correct position
  expect(themeChangerButton).toHaveStyle({
    position: 'fixed',
    top: '1rem',
    right: '3rem'
  });

  // Simulate a click on the button
  fireEvent.click(themeChangerButton);

  // Check if the color mode is toggled
  const updatedColorMode = document.documentElement.getAttribute('data-theme');
  expect(updatedColorMode).toBe('light'); // Assuming light mode is the default

  // Simulate another click on the button
  fireEvent.click(themeChangerButton);

  // Check if the color mode is toggled again
  const toggledColorMode = document.documentElement.getAttribute('data-theme');
  expect(toggledColorMode).toBe('dark'); // Assuming dark mode is toggled
});
