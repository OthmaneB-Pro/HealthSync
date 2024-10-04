import { create } from "zustand";

type MealState = {
  mealName: string;
  quantity: number;
  search: string;
  setMealData: (mealName: string, quantity: number, search: string) => void;
};

export const useMealTracking = create<MealState>((set) => ({
  mealName: "",
  quantity: 0,
  search: "",
  setMealData: (mealName, quantity, search) =>
    set({ mealName, quantity, search }),
}));
