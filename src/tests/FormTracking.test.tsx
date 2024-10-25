import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import {useMealTracking}  from '../stores/useMealTracking';
import FormTracking from '../components/pages/mealTracking/form/FormTracking';

jest.mock('../stores/useMealTracking', () => ({
  useMealTracking: jest.fn(),
}));

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

    const mealInput = screen.getByPlaceholderText(/recherchez un repas/i);
    const quantityInput = screen.getByPlaceholderText(/quantité/i);
    const submitButton = screen.getByRole('button', { name: /confirmer/i });

    expect(mealInput).toBeInTheDocument();
    expect(quantityInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    fireEvent.change(mealInput, { target: { value: 'Pizza' } });
    fireEvent.change(quantityInput, { target: { value: '2' } });

    fireEvent.click(submitButton);

    await waitFor(() => expect(submitButton).toBeDisabled());

    
  });
});
