import styled from "styled-components";
import { MyLineChart } from "./chart/LineChart";
import { useState } from "react";
import Button from "../../reusable-ui/Button";
import { GiNightSleep } from "react-icons/gi";
import { FaCalculator, FaWeight } from "react-icons/fa";
import { MyBarChart } from "./chart/BarChart";
import { MyPieChart } from "./chart/PieChart";

export default function DashboardPage() {
  const [chartType, setChartType] = useState("weight");
  return (
    <DashboardStyled>
      <div className="container">
        <h1>Dashboard</h1>
        <div className="button-container">
          <Button
            label="Poids"
            className={chartType === "weight" ? "button-fix" : ""}
            Logo={<FaWeight />}
            onClick={() => setChartType("weight")}
          />
          <Button
            label="Sommeil"
            className={chartType === "sleep" ? "button-fix" : ""}
            Logo={<GiNightSleep />}
            onClick={() => setChartType("sleep")}
          />
          <Button
            label="Calories"
            className={chartType === "calory" ? "button-fix" : ""}
            Logo={<FaCalculator />}
            onClick={() => setChartType("calory")}
          />
        </div>
      </div>
      <p>Augmentez vos heures de sommeil !</p>

      {chartType === "weight" && <MyLineChart />}
      {chartType === "sleep" && <MyBarChart />}
      {chartType === "calory" && <MyPieChart />}
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  h1 {
    font-family: "Epilogue";
  }
  p {
    color: red;
    margin-bottom: 45px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .button-container {
    display: flex;
    button {
      margin-right: 10px;
    }
  }
  .button-fix {
    background: #a11414;
  }
`;
