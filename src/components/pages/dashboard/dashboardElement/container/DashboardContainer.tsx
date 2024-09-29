import styled from "styled-components";
import ButtonContainer from "./ButtonContainer";
import Title from "../../../../reusable-ui/Title";

export default function DashboardContainer() {
  return (
    <ContainerStyled>
      <Title label="Dashboard" />
      <ButtonContainer />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
