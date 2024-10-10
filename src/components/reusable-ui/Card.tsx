import styled from "styled-components";
import { CardType } from "./typeReusable";

export default function Card({
  src,
  alt,
  title,
  quantity,
  calory,
  meal,
}: CardType) {
  return (
    <CardStyled>
      <div className="image_container">
        <img src={src} alt={alt} />
      </div>
      <h2>{title}</h2>
      <div className="textCard">
        <p>Quantité : {quantity}g</p>
        <p>Calorie : {calory} kcal</p>
      </div>
      <h4>{meal}</h4>
    </CardStyled>
  );
}
const CardStyled = styled.div`
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

  .image_container {
    max-width: 100%;
    height: 150px;
  }
  img {
    max-width: 100%;
    max-height: 150px;
    object-fit: contain;
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
