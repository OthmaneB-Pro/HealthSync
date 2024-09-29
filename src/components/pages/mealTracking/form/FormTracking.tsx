import { useForm } from "react-hook-form";
import { schema } from "./yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import InputWithYup from "./InputYup";
import Button from "../../../reusable-ui/Button";
import { FaWeight } from "react-icons/fa";
import ErrorText from "../../../reusable-ui/ErrorText";
import { FormType } from "./typeForm";

export default function FormTracking() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWithYup type="" name="mealName" placeholder="Recherchez un repas" register={register}/>
        {errors.mealName && <ErrorText errors={errors} fieldName="mealName" />}
        <Button label="Confirmer" Logo={<FaWeight />} />
      </form>
    </div>
  );
}
