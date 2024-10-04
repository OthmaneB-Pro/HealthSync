import styled from "styled-components";
import { ListResultsType } from "./typeReusable";

export default function ListResults({ onClick, label }: ListResultsType) {
  return <ListResultStyled onClick={onClick}>{label}</ListResultStyled>;
}

const ListResultStyled = styled.li`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6), 0 6px 20px rgba(0, 0, 0, 0.1);
  list-style-type: none;
  background: white;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;
