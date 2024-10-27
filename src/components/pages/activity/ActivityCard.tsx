import styled from "styled-components";
import { useActivityStore } from "../../../stores/useActivityStore";

export default function ActivityCard() {
  const { activities } = useActivityStore();

  return (
    <ContainerStyled>
      {activities.length > 0
        ? activities.map((activity, index) => (
            <CardStyled key={index}>
              <h2>{activity.sport}</h2>
              <p>{activity.duration}</p>
            </CardStyled>
          ))
        : "Pas d'activité enregistrée"}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  background-color: white;
  border: 1px solid gray;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
`;
