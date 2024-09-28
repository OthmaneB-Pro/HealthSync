export const getBarColor = (hours: number) => {
  if (hours < 6) return "#FF0000";
  if (hours >= 6 && hours <= 8) return "#FFA500";
  return "#008000";
};

export const colorsPieChart = ["#FF8042", "#0088FE", "#00C49F", "#FFBB28"];
