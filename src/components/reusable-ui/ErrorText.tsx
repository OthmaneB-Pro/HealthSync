import styled from "styled-components";
import { ErrorTextProps } from "./typeReusable";

export default function ErrorText({ errors, fieldName }: ErrorTextProps) {
  return <ErrorTextStyled>{errors[fieldName]?.message}</ErrorTextStyled>;
}

const ErrorTextStyled = styled.p`
  color: red;
  font-size: 14px;
`;
