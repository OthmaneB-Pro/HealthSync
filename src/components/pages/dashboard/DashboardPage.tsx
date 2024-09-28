import styled from "styled-components";
import { MyLineChart } from "./lineChart/LineChart";

export default function DashboardPage() {
  return (
    <DashboardStyled>
      <h1>Dashboard</h1>
      <p>Augmentez vos heures de sommeil !</p>
      <MyLineChart />
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  p {
    color: red;
  }
`;
