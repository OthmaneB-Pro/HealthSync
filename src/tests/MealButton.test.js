import { render, fireEvent, screen } from '@testing-library/react';
import MealButton from './MealButton';
import { ButtonMealList } from './buttonMealList';

jest.mock('../typeForm', () => ({
  MealButtonType: {
    setValue: jest.fn(),
  },
}));

describe('MealButton', () => {
  it('renders without crashing', () => {
    render(<MealButton setValue={jest.fn()} />);
  });

  it('renders the correct number of buttons', () => {
    render(<MealButton setValue={jest.fn()} />);
    expect(screen.getAllByRole('button')).toHaveLength(ButtonMealList.length);
  });

  it('updates selectedMeal state when button is clicked', () => {
    render(<MealButton setValue={jest.fn()} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(MealButton.selectedMeal).toBe(ButtonMealList[0].label);
  });

  it('calls setValue with correct argument when button is clicked', () => {
    const setValue = jest.fn();
    render(<MealButton setValue={setValue} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith('mealName', ButtonMealList[0].label);
  });

  it('adds active class to selected button', () => {
    render(<MealButton setValue={jest.fn()} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveClass('active');
  });
});