// FormTracking.test.tsx

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormTracking from './FormTracking';
import { useMealTracking } from '../../../../stores/useMealTracking';
import { schema } from './yupSchema';

// Mock du hook `useMealTracking` pour éviter des comportements inattendus
jest.mock('../../../../stores/useMealTracking', () => ({
  useMealTracking: jest.fn(),
}));

// Mock pour éviter d'utiliser réellement `generateUniqueId`
jest.mock('../../../../utils/generateId', () => ({
  generateUniqueId: jest.fn(() => 'unique-id'),
}));

describe('FormTracking', () => {
  const setMealData = jest.fn();
  const onAddCard = jest.fn();

  beforeEach(() => {
    (useMealTracking as jest.Mock).mockReturnValue({ setMealData });
  });

  test('renders form and submits data correctly', async () => {
    render(<FormTracking onAddCard={onAddCard} />);

    // Vérifie que les composants essentiels du formulaire sont rendus
    const mealInput = screen.getByPlaceholderText(/meal/i);
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
    await waitFor(() => {
      expect(setMealData).toHaveBeenCalledWith('Pizza', 2, expect.any(String));
      expect(onAddCard).toHaveBeenCalledWith({
        id: 'unique-id',
        title: expect.any(String),
        src: expect.any(String),
        alt: expect.any(String),
        quantity: '2',
        calory: expect.any(String),
        mealName: 'Pizza',
      });
    });
  });
});
