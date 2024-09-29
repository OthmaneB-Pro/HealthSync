import styled from "styled-components";
import Button from "../../../../reusable-ui/Button";
import { ButtonMealList } from "./ButtonMealList";

type MealButtonType = {
  selectedMeal: string | null;
  handleMealSelection: (meal: string) => void;
};

export default function MealButton({
  selectedMeal,
  handleMealSelection,
}: MealButtonType) {
  return (
    <MealButtonStyled>
      {ButtonMealList.map((button) => (
        <Button
          key={button.label}
          label={button.label}
          Logo={button.Logo}
          className={selectedMeal === button.label ? "active" : ""}
          onClick={() => handleMealSelection(button.label)}
        />
      ))}
    </MealButtonStyled>
  );
}

const MealButtonStyled = styled.div`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  button.active {
    background-color: #a11414;
  }
`;
