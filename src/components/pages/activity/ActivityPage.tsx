import styled from "styled-components";
import Title from "../../reusable-ui/Title";
import ActivityCard from "./ActivityCard";
import FormActivity from "./FormActivity";

export default function ActivityPage() {
  return (
    <ActivityPageStyled>
      <Title label="Activité physique" />
      <ContainerStyled>
        <FormActivity />
        <ActivityCard />
      </ContainerStyled>
    </ActivityPageStyled>
  );
}
const ContainerStyled = styled.div`
  display: flex;
  gap: 40px;
`;

const ActivityPageStyled = styled.div`
    height: 80vh;
`;
