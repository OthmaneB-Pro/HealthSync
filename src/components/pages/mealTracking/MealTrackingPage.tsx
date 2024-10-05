import styled from "styled-components";
import Title from "../../reusable-ui/Title";
import CardDisplay from "./form/cardDisplay/CardDisplay";
import FormTracking from "./form/FormTracking";
import CardMeal from "./menu/CardMeal";

export default function MealTrackingPage() {
  return (
    <div>
      <Title label="Suivi des repas" />
      <FormDisplayStyled>
        <FormTracking />
        <CardDisplay />
      </FormDisplayStyled>
      <CardMeal/>
    </div>
  );
}

const FormDisplayStyled = styled.div`
  display: flex;
  gap: 50px;
`;
