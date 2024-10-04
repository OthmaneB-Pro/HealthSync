import { create } from "zustand";


type ChartState = {
  chartType: "weight" | "sleep" | "calory";
  setChartType: (type: "weight" | "sleep" | "calory") => void;
} 

export const useChartStore = create<ChartState>((set) => ({
  chartType: "weight",
  setChartType: (type) => set({ chartType: type }),
}));
