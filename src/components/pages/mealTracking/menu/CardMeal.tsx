import styled from "styled-components";
import Title from "../../../reusable-ui/Title";
import { MenuType } from "../form/typeForm";
import Card from "../../../reusable-ui/Card";

interface CardMealProps {
  menu: MenuType[];
}

export default function CardMeal({ menu }: CardMealProps) {
  return (
    <CardMealStyled>
      <Title label="Petit-déjeuner" />
      {menu.map((meal, index) => (
        <Card
          key={index}
          title={meal.title}
          src={meal.src}
          alt={meal.alt}
          quantity={meal.quantity}
          calory={meal.calory}
          meal={meal.mealName}
        />
      ))}
    </CardMealStyled>
  );
}

const CardMealStyled = styled.div`
  margin-top: 100px;
`;
