import { create } from "zustand";
import { fetchImage } from "../api/MealAndActivityResults";

type MealState = {
  mealName: string;
  quantity: number;
  search: string;
  image: string;
  setMealData: (mealName: string, quantity: number, search: string) => void;
};

export const useMealTracking = create<MealState>((set) => ({
  mealName: "",
  quantity: 0,
  search: "",
  image: "",
  setMealData: async (mealName, quantity, search) => {
    const image = await fetchImage(search);

    set({
      mealName,
      quantity,
      search,
      image: image || "default-image-url.jpg",
    });
  },
}));
