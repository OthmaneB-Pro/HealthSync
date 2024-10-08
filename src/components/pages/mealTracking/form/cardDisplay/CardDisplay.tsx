import styled from "styled-components";
import { useMealTracking } from "../../../../../stores/useMealTracking";

export default function CardDisplay() {
  const { mealName, search, quantity } = useMealTracking();
  return (
    <CardDisplayStyled>
      <img
        src="https://www.doitinparis.com/files/2022/bars-restos/burgers/10/junk/junk-burger.jpg"
        alt="imageMeal"
      />
      <h2>{search}</h2>
      <div className="textCard">
        <p>Quantité : {quantity}g</p>
        <p>Calories : 25cal</p>
      </div>
      <h4>{mealName}</h4>
    </CardDisplayStyled>
  );
}
const CardDisplayStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  width: 250px;
  height: 290px;
  padding: 30px 5px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5), 0 6px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  img {
    width: 160px;
    height: auto;
  }

  h2 {
    width: 220px;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }

  .textCard {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
`;
