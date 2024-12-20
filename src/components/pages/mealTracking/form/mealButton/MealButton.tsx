import styled from "styled-components";
import Button from "../../../../reusable-ui/Button";
import { ButtonMealList } from "./buttonMealList";
import { useState } from "react";
import { MealButtonType } from "../typeForm";

export default function MealButton({ setValue }: MealButtonType) {
  const [selectedMeal, setSelectedMeal] = useState<string | null>(null);
  const handleMealSelection = (meal: string) => {
    setSelectedMeal(meal);
    setValue("mealName", meal);
  };

  return (
    <MealButtonStyled>
      {ButtonMealList.map((button) => (
        <Button
          key={button.label}
          type="button"
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
