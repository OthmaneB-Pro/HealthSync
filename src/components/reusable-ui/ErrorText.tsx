import { FieldErrors } from "react-hook-form";
import styled from "styled-components";
import { FormType } from "../pages/mealTracking/form/typeForm";

type ErrorTextProps = {
  errors: FieldErrors<FormType>;
  fieldName: keyof FormType;
};

export default function ErrorText({ errors, fieldName }: ErrorTextProps) {
  return <ErrorTextStyled>{errors[fieldName]?.message}</ErrorTextStyled>;
}

const ErrorTextStyled = styled.p`
  color: red;
  font-size: 14px;
`;
