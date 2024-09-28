import DashBoardTitle from "./DashBoardTitle";
import styled from "styled-components";
import ButtonContainer from "./ButtonContainer";

export default function DashboardContainer() {
  return (
    <ContainerStyled>
      <DashBoardTitle />
      <ButtonContainer />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
