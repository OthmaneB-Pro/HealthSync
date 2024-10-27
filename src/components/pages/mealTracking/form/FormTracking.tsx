import { useForm } from "react-hook-form";
import { schema } from "./yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../reusable-ui/Button";
import { FaCircleCheck } from "react-icons/fa6";
import { FormTrackingProps, FormType, MenuType, Product } from "./typeForm";
import styled from "styled-components";
import MealButton from "./mealButton/MealButton";
import MealInput from "./mealInput/MealInput";
import { useMealTracking } from "../../../../stores/useMealTracking";
import SearchComponent from "./mealInput/search/SearchComponent";
import SearchResults from "./mealInput/search/SearchResults";
import { useState } from "react";
import { generateUniqueId } from "../../../../utils/generateId";

export default function FormTracking({ onAddCard }: FormTrackingProps) {
  const { setMealData } = useMealTracking();
  const [results, setResults] = useState<Product[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormType) => {
    setMealData(data.mealName, data.quantity, data.search);
    const { mealName, quantity, search, image, calory } =
      useMealTracking.getState();

    const caloryTotal = (parseFloat(calory) * data.quantity).toFixed(0);

    const newCard: MenuType = {
      id: generateUniqueId(),
      title: search,
      src: image,
      alt: search,
      quantity: quantity,
      calory: caloryTotal,
      mealName: mealName,
    };
    onAddCard(newCard);
  };

  return (
    <ContainerStyled>
      <FormTrackingStyled onSubmit={handleSubmit(onSubmit)}>
        <MealButton setValue={setValue} />
        <MealInput errors={errors} register={register} />
        <Button
          className="submit-button"
          label="Confirmer"
          Logo={<FaCircleCheck />}
          disabled={isSubmitting}
        />
      </FormTrackingStyled>

      <div>
        <SearchComponent setResults={setResults} />
        <SearchResults
          results={results}
          handleClick={(item: Product) => setValue("search", item.product_name)}
        />
      </div>
    </ContainerStyled>
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
  border: 1px solid gray; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);

  .submit-button {
    margin-top: 15px;
  }
`;

const ContainerStyled = styled.div`
  display: flex;
  gap: 20px;
`;
