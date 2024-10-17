import styled from "styled-components";
import Title from "../../reusable-ui/Title";
import CardDisplay from "./form/cardDisplay/CardDisplay";
import FormTracking from "./form/FormTracking";
import CardMeal from "./menu/CardMeal";
import { useState } from "react";
import { Empty_Menu } from "../../../data/MenuData";
import { MenuType } from "./form/typeForm";
import { useFormStore } from "../../../stores/useFormStore";
import FormUpdateCard from "./menu/FormUpdateCard";

export default function MealTrackingPage() {
  const [menu, setMenu] = useState<MenuType[]>(Empty_Menu);
  const { isOpen } = useFormStore();

  const onAddCard = (newCard: MenuType) => {
    setMenu((prevMenu) => [newCard, ...prevMenu]);
  };

  return (
    <div>
      <Title label="Suivi des repas" />
      <FormDisplayStyled>
        {isOpen && <FormUpdateCard />}
        <FormTracking onAddCard={onAddCard} />
        <CardDisplay />
      </FormDisplayStyled>
      <CardMeal menu={menu} />
    </div>
  );
}

const FormDisplayStyled = styled.div`
  display: flex;
  gap: 50px;
`;