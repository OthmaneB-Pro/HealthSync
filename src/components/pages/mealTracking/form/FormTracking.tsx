import { useForm } from "react-hook-form";
import { schema } from "./yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import InputWithYup from "../../../reusable-ui/InputYup";
import Button from "../../../reusable-ui/Button";
import { FaWeight } from "react-icons/fa";
import ErrorText from "../../../reusable-ui/ErrorText";
import { FormType } from "./typeForm";
import { useState } from "react";
import styled from "styled-components";

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
        <div className="meal-buttons">
          <Button
            Logo={<FaWeight />}
            label="Petit Déjeuner"
            onClick={() => handleMealSelection("Petit Déjeuner")}
            className={selectedMeal === "Petit Déjeuner" ? "active" : ""}
          />
          <Button
            Logo={<FaWeight />}
            label="Déjeuner"
            onClick={() => handleMealSelection("Déjeuner")}
            className={selectedMeal === "Déjeuner" ? "active" : ""}
          />
          <Button
            Logo={<FaWeight />}
            label="Collation"
            onClick={() => handleMealSelection("Collation")}
            className={selectedMeal === "Collation" ? "active" : ""}
          />
          <Button
            Logo={<FaWeight />}
            label="Dîner"
            onClick={() => handleMealSelection("Dîner")}
            className={selectedMeal === "Dîner" ? "active" : ""}
          />
        </div>
        <InputWithYup
          type="hidden"
          value={selectedMeal || ""}
          name="mealName"
          placeholder="Petit dej / dej / collation / diner"
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
        <Button label="Confirmer" Logo={<FaWeight />} disabled={isSubmitting} />
      </FormTrackingStyled>
    </div>
  );
}

const FormTrackingStyled = styled.form`
  .meal-buttons button.active {
    background-color: #a11414;
  }
`;
