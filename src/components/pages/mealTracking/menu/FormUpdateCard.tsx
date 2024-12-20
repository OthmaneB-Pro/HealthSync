import styled from "styled-components";
import { useFormStore } from "../../../../stores/useFormStore";
import InputWithYup from "../../../reusable-ui/InputYup";
import MealButton from "../form/mealButton/MealButton";
import { FormType } from "../form/typeForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../form/yupSchema";
import { useMealTracking } from "../../../../stores/useMealTracking";
import Button from "../../../reusable-ui/Button";
import { FaCircleCheck } from "react-icons/fa6";
import { useEffect } from "react";
import CloseButton from "./CloseButton";

export default function FormUpdateCard() {
  const { setIsOpen } = useFormStore();
  const { mealName, search, quantity, setMealData } = useMealTracking();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({ resolver: yupResolver(schema) });

  useEffect(() => {
    setValue("search", search);
    setValue("quantity", quantity);
    setValue("mealName", mealName);
  }, [search, quantity, setValue, mealName]);

  const onSubmit = (data: FormType) => {
    setMealData(data.mealName, data.quantity, data.search);
    setIsOpen(false);
  };

  return (
    <BackgroundStyled>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <MealButton setValue={setValue} />
        <InputWithYup
          name="search"
          type="text"
          placeholder="Repas"
          register={register}
        />
        {errors.search && <span>{errors.search.message}</span>}
        <InputWithYup
          name="quantity"
          type="number"
          placeholder="Quantité"
          register={register}
        />
        {errors.quantity && <span>{errors.quantity.message}</span>}
        <Button
          className="submit-button"
          label="Confirmer"
          Logo={<FaCircleCheck />}
          disabled={isSubmitting}
          type="submit"
        />
        <CloseButton setIsOpen={setIsOpen} />
      </FormStyled>
    </BackgroundStyled>
  );
}

const BackgroundStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const FormStyled = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f9f9f9;
  width: 550px;
  height: 500px;
  max-height: 90vh;
  overflow-y: auto;
  z-index: 1001;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  .submit-button {
    margin-top: 25px;
  }
`;
