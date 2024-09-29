import { useForm } from "react-hook-form";
import { schema } from "./yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import InputWithYup from "../../../reusable-ui/InputYup";
import Button from "../../../reusable-ui/Button";
import { FaIceCream } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import ErrorText from "../../../reusable-ui/ErrorText";
import { FormType } from "./typeForm";
import { useState } from "react";
import styled from "styled-components";
import { MdOutlineFreeBreakfast, MdOutlineLunchDining } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";

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
            Logo={<MdOutlineFreeBreakfast />}
            label="Petit Déjeuner"
            onClick={() => handleMealSelection("Petit Déjeuner")}
            className={selectedMeal === "Petit Déjeuner" ? "active" : ""}
          />
          <Button
            Logo={<MdOutlineLunchDining />}
            label="Déjeuner"
            onClick={() => handleMealSelection("Déjeuner")}
            className={selectedMeal === "Déjeuner" ? "active" : ""}
          />
          <Button
            Logo={<FaIceCream />}
            label="Collation"
            onClick={() => handleMealSelection("Collation")}
            className={selectedMeal === "Collation" ? "active" : ""}
          />
          <Button
            Logo={<GiHotMeal />}
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
        <Button className="submit-button" label="Confirmer" Logo={<FaCircleCheck />} disabled={isSubmitting} />
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
padding : 30px 5px;
border-radius: 15px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  .meal-buttons{
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    gap : 10px;
  }
  .meal-buttons button.active {
    background-color: #a11414;
  }
  .submit-button{
    margin-top: 15px;
  }

`;
