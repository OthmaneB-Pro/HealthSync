import DashBoardTitle from "./DashBoardTitle";
import styled from "styled-components";
import ButtonContainer from "./ButtonContainer";
import { DashboardContainerType } from "./typeDashboard";

export default function DashboardContainer({
  chartType,
  setChartType,
}: DashboardContainerType) {
  return (
    <ContainerStyled>
      <DashBoardTitle />
      <ButtonContainer chartType={chartType} setChartType={setChartType} />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
