import styled from "styled-components";
import Title from "../../../reusable-ui/Title";

export default function CardMeal() {
  return (
    <CardMealStyled>
      <Title label="Petit-déjeuner" />
    </CardMealStyled>
  );
}

const CardMealStyled = styled.div`
  margin-top: 100px;
`;
