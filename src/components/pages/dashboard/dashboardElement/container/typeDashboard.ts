export type DashboardContainerType = {
  chartType: "weight" | "sleep" | "calory";
  setChartType: (type: "weight" | "sleep" | "calory") => void;
};
