import { create } from "zustand";
import { fetchImage } from "../api/MealAndActivityResults";

type MealState = {
  mealName: string;
  quantity: number;
  search: string;
  image: string;
  calory: string;
  setMealData: (mealName: string, quantity: number, search: string) => void;
};

export const useMealTracking = create<MealState>((set) => ({
  mealName: "",
  quantity: 0,
  search: "",
  image: "",
  calory: "N/A",
  setMealData: async (mealName, quantity, search) => {
    const { image, calory } = await fetchImage(search);

    set({
      mealName,
      quantity,
      search,
      image: image || "./img/image_default.PNG",
      calory,
    });
  },
}));
