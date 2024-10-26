import styled from "styled-components";
import { sportsData } from "../../../data/ActivityData";
import Button from "../../reusable-ui/Button";
import { FaCircleCheck } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { activity } from "./activity";
import { activityType } from "./activityType";

export default function FormActivity() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(activity),
  });

  const onSubmit = (data: activityType) => {
    console.log(data);
  };

  return (
    <div>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="sport">Sport : </label>
        <select id="sport" {...register("sport")}>
          {sportsData.map((sport) => (
            <option key={sport} value={sport}>
              {sport}
            </option>
          ))}
        </select>
        {errors.sport && <p>{errors.sport.message}</p>}

        <label>Durée : </label>
        <input placeholder="Durée" type="time" {...register("duration")} />
        {errors.duration && <p>{errors.duration.message}</p>}

        <Button Logo={<FaCircleCheck />} label="Confirmer" />
      </FormStyled>
    </div>
  );
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
