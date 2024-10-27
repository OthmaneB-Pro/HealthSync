import styled from "styled-components";
import { sportsData } from "../../../data/ActivityData";
import Button from "../../reusable-ui/Button";
import { FaCircleCheck } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { activity } from "./activity";
import { activityType } from "./activityType";
import InputWithYup from "../../reusable-ui/InputYup";
import Select from "../../reusable-ui/Select";

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
        <Select
          id="sport"
          label="Sport : "
          options={sportsData}
          register={register("sport")}
          error={errors.sport?.message}
        />

        <div className="time">
          <label>Durée : </label>
          <InputWithYup
            name="duration"
            placeholder="Durée"
            type="time"
            register={register}
          />
          {errors.duration && <p>{errors.duration.message}</p>}
        </div>

        <Button Logo={<FaCircleCheck />} label="Confirmer" />
      </FormStyled>
    </div>
  );
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: white;
  border: 1px solid gray;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;

  .time {
    margin-bottom: 20px;
    label {
      font-size: 18px;
      margin-bottom: 15px;
    }
    input {
      padding: 10px;
      border: 1px solid gray;
      border-radius: 5px;
      width: 280px;
    }
    p {
      color: red;
    }
  }
`;
