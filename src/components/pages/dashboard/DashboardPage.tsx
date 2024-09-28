import styled from "styled-components";
import { MyLineChart } from "./lineChart/LineChart";
import { useState } from "react";
import Button from "../../reusable-ui/Button";
import { GiNightSleep } from "react-icons/gi";
import { FaCalculator, FaWeight } from "react-icons/fa";
import { MyBarChart } from "./lineChart/BarChart";

export default function DashboardPage() {
  const [graphType, setGraphType] = useState("weight");
  return (
    <DashboardStyled>
      <div className="container">
        <h1>Dashboard</h1>
        <div className="button-container">
          <Button
            label="Poids"
            Logo={<FaWeight />}
            onClick={() => setGraphType("weight")}
          />
          <Button
            label="Sommeil"
            Logo={<GiNightSleep />}
            onClick={() => setGraphType("sleep")}
          />
          <Button
            label="Calorie"
            Logo={<FaCalculator />}
            onClick={() => setGraphType("calory")}
          />
        </div>
      </div>
      <p>Augmentez vos heures de sommeil !</p>

      {graphType === "weight" && <MyLineChart />}
      {graphType === "sleep" && <MyBarChart />}
      {graphType === "calory" && <MyLineChart />}
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
`;
