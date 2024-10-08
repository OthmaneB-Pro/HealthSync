import styled from "styled-components";
import Title from "../../../reusable-ui/Title";
import { CardMealProps } from "../form/typeForm";
import Card from "../../../reusable-ui/Card";

export default function CardMeal({ menu }: CardMealProps) {
  return (
    <CardMealStyled>
      <Title label="Petit-déjeuner" />
      <div className="container-card">
        {menu.length > 1
          ? menu
              .filter((meal) => meal.title && meal.quantity)
              .map((meal, index) => (
                <Card
                  key={index}
                  title={meal.title}
                  src={meal.src}
                  alt={meal.alt}
                  quantity={meal.quantity}
                  calory={meal.calory}
                  meal={meal.mealName}
                />
              ))
          : "Vous n'avez rien mangé de la journée !"}
      </div>
    </CardMealStyled>
  );
}

const CardMealStyled = styled.div`
  margin-top: 100px;
  .container-card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;
