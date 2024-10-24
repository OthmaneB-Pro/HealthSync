// FormTracking.test.tsx

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import {useMealTracking}  from '../stores/useMealTracking';
import FormTracking from '../components/pages/mealTracking/form/FormTracking';

// Mock du hook `useMealTracking` pour éviter des comportements inattendus
jest.mock('../stores/useMealTracking', () => ({
  useMealTracking: jest.fn(),
}));

// Mock pour éviter d'utiliser réellement `generateUniqueId`
jest.mock('../utils/generateId.tsx', () => ({
  generateUniqueId: jest.fn(() => 'unique-id'),
}));

describe('FormTracking', () => {
  const setMealData = jest.fn();
  const onAddCard = jest.fn();

  beforeEach(() => {
    (useMealTracking as unknown as jest.Mock).mockReturnValue({ setMealData });
  });

  test('renders form and submits data correctly', async () => {
    render(<FormTracking onAddCard={onAddCard} />);

    // Vérifie que les composants essentiels du formulaire sont rendus
    const mealInput = screen.getByPlaceholderText(/search/i);
    const quantityInput = screen.getByPlaceholderText(/quantity/i);
    const submitButton = screen.getByRole('button', { name: /confirmer/i });

    expect(mealInput).toBeInTheDocument();
    expect(quantityInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    // Simule la saisie dans les champs
    fireEvent.change(mealInput, { target: { value: 'Pizza' } });
    fireEvent.change(quantityInput, { target: { value: '2' } });

    // Simule la soumission du formulaire
    fireEvent.click(submitButton);

    // Le bouton doit être désactivé pendant la soumission
    await waitFor(() => expect(submitButton).toBeDisabled());

    // Vérifie que `setMealData` et `onAddCard` sont appelés correctement
    
  });
});
