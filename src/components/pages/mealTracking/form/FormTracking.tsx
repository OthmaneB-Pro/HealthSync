import { useForm } from "react-hook-form";
import { schema } from "./yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import InputWithYup from "../../../reusable-ui/InputYup";
import Button from "../../../reusable-ui/Button";
import { FaCircleCheck } from "react-icons/fa6";
import ErrorText from "../../../reusable-ui/ErrorText";
import { FormType } from "./typeForm";
import { useState } from "react";
import styled from "styled-components";
import MealButton from "./mealButton/MealButton";

export default function FormTracking() {
  const [selectedMeal, setSelectedMeal] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  const handleMealSelection = (meal: string) => {
    setSelectedMeal(meal);
    setValue("mealName", meal);
  };
  return (
    <div>
      <FormTrackingStyled onSubmit={handleSubmit(onSubmit)}>
        <MealButton
          selectedMeal={selectedMeal}
          handleMealSelection={handleMealSelection}
        />
        <InputWithYup
          type="hidden"
          value={selectedMeal || ""}
          name="mealName"
          placeholder=""
          register={register}
        />
        {errors.mealName && <ErrorText errors={errors} fieldName="mealName" />}
        <InputWithYup
          type="text"
          name="search"
          placeholder="Recherchez un repas"
          register={register}
        />
        {errors.search && <ErrorText errors={errors} fieldName="search" />}{" "}
        <InputWithYup
          type="number"
          name="quantity"
          placeholder="Quantité"
          register={register}
        />
        {errors.quantity && <ErrorText errors={errors} fieldName="quantity" />}
        <Button
          className="submit-button"
          label="Confirmer"
          Logo={<FaCircleCheck />}
          disabled={isSubmitting}
        />
      </FormTrackingStyled>
    </div>
  );
}

const FormTrackingStyled = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 464px;
  padding: 30px 5px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);

  .submit-button {
    margin-top: 15px;
  }
`;
