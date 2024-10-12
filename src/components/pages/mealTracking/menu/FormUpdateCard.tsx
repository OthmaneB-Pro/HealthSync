import styled from "styled-components";
import { useFormStore } from "../../../../stores/useFormStore";
import InputWithYup from "../../../reusable-ui/InputYup";
import MealButton from "../form/mealButton/MealButton";
import { FormType } from "../form/typeForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../form/yupSchema";
import { useMealTracking } from "../../../../stores/useMealTracking";

export default function FormUpdateCard() {
    const {setIsOpen} = useFormStore()
    const { search, quantity } = useMealTracking()
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
      } = useForm<FormType>({ resolver: yupResolver(schema) });

    const onSubmit = (data : FormType) => {
        console.log(data)
    }
    
  return (
    <BackgroundStyled>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <MealButton setValue={setValue} />
        <InputWithYup type="text" value={search} placeholder="Repas" /> 
        <InputWithYup type="number" value={quantity} placeholder="Quantité" />
        <button onClick={() => setIsOpen(false)}>
            Fermer le bouton
        </button>
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
  width: 700px;
  height: auto;
  max-height: 90vh;
  overflow-y: auto;
  z-index: 1001;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
