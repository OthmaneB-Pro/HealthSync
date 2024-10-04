import styled from "styled-components";
import { TitleType } from "./typeReusable";

export default function Title({label} : TitleType) {
  return <TitleStyled>{label}</TitleStyled>;
}

const TitleStyled = styled.h1`
  font-family: "Epilogue";
  font-size: 36px;
`;
