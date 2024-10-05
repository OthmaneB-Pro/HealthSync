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
      <img src={src} alt={alt} />
      <h2>{title}</h2>
      <div className="textCard">
        <p>{quantity}</p>
        <p>{calory}</p>
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
