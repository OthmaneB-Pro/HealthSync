import styled from "styled-components";
import { MyLineChart } from "./chart/LineChart";
import { useState } from "react";

import { MyBarChart } from "./chart/BarChart";
import { MyPieChart } from "./chart/PieChart";
import DashboardContainer from "./dashboardElement/container/DashboardContainer";

export default function DashboardPage() {
  const [chartType, setChartType] = useState<"weight" | "sleep" | "calory">(
    "weight"
  );
  return (
    <DashboardStyled>
      <DashboardContainer chartType={chartType} setChartType={setChartType} />
      <p>Augmentez vos heures de sommeil !</p>

      {chartType === "weight" && <MyLineChart />}
      {chartType === "sleep" && <MyBarChart />}
      {chartType === "calory" && <MyPieChart />}
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  p {
    color: red;
    margin-bottom: 45px;
  }
`;
