import { render, screen } from '@testProvider';

import Other from '@app/other';
import React from 'react';

describe('Other component', () => {
  test('renders without errors', () => {
    render(<Other />);
    expect(screen.getByText('Le coin du rôliste')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Mot de passe')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Se connecter' })).toBeInTheDocument();
  });
});
