import { create } from 'zustand';

interface MealState {
  selectedMeal: string | null;
  setMeal: (meal: string) => void;
}

export const useMealStore = create<MealState>((set) => ({
  selectedMeal: null,
  setMeal: (meal: string) => set({ selectedMeal: meal }),
}));
