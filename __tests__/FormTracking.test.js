import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { FormTracking } from './FormTracking';
import { useMealTracking } from '../../../../stores/useMealTracking';
import { generateUniqueId } from '../../../../utils/generateId';

jest.mock('../../../../stores/useMealTracking');
jest.mock('../../../../utils/generateId');

describe('FormTracking', () => {
  const onAddCard = jest.fn();
  const setMealData = jest.fn();
  const useMealTrackingMock = {
    setMealData,
    getState: () => ({
      mealName: 'test meal',
      quantity: 1,
      search: 'test search',
      image: 'test image',
      calory: '100',
    }),
  };

  beforeEach(() => {
    useMealTracking.mockImplementation(() => useMealTrackingMock);
    generateUniqueId.mockImplementation(() => 'test-id');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls onSubmit when the form is submitted', async () => {
    render(<FormTracking onAddCard={onAddCard} />);
    const submitButton = screen.getByText('Confirmer');
    fireEvent.click(submitButton);
    await waitFor(() => expect(onAddCard).toHaveBeenCalledTimes(1));
  });

  it('calls setMealData with the correct data when the form is submitted', async () => {
    render(<FormTracking onAddCard={onAddCard} />);
    const submitButton = screen.getByText('Confirmer');
    fireEvent.click(submitButton);
    await waitFor(() => expect(setMealData).toHaveBeenCalledTimes(1));
    expect(setMealData).toHaveBeenCalledWith('test meal', 1, 'test search');
  });

  it('calls onAddCard with the correct data when the form is submitted', async () => {
    render(<FormTracking onAddCard={onAddCard} />);
    const submitButton = screen.getByText('Confirmer');
    fireEvent.click(submitButton);
    await waitFor(() => expect(onAddCard).toHaveBeenCalledTimes(1));
    expect(onAddCard).toHaveBeenCalledWith({
      id: 'test-id',
      title: 'test search',
      src: 'test image',
      alt: 'test search',
      quantity: 1,
      calory: '100',
      mealName: 'test meal',
    });
  });

  it('renders the form correctly', () => {
    render(<FormTracking onAddCard={onAddCard} />);
    expect(screen.getByText('Confirmer')).toBeInTheDocument();
    expect(screen.getByText('Recherchez un repas')).toBeInTheDocument();
  });

  it('disables the form when submitting', async () => {
    render(<FormTracking onAddCard={onAddCard} />);
    const submitButton = screen.getByText('Confirmer');
    fireEvent.click(submitButton);
    await waitFor(() => expect(submitButton).toBeDisabled());
  });
});