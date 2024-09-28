import { create } from "zustand";

type ChartType = "weight" | "sleep" | "calory";

interface ChartState {
  chartType: ChartType;
  setChartType: (type: ChartType) => void;
}

export const useChartStore = create<ChartState>((set) => ({
  chartType: "weight",
  setChartType: (type) => set({ chartType: type }),
}));
