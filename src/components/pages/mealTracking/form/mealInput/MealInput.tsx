import styled from "styled-components";
import ErrorText from "../../../../reusable-ui/ErrorText";
import InputWithYup from "../../../../reusable-ui/InputYup";
import { FormType, MealInputType } from "../typeForm";
import { inputMealList } from "./inputMealList";

export default function MealInput({ errors, register }: MealInputType) {
  return (
    <>
      {inputMealList.map((input) => (
        <MealInputStyled key={input.name}>
          <InputWithYup
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            register={register}
          />
          {errors[input.name as keyof FormType] && (
            <ErrorText
              errors={errors}
              fieldName={input.name as keyof FormType}
            />
          )}
        </MealInputStyled>
      ))}
    </>
  );
}

const MealInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`