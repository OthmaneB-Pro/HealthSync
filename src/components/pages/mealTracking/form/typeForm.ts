import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

export type FormType = {
  mealName: string;
  search: string;
  quantity: number;
};

export type MealInputType = {
  register: UseFormRegister<FormType>;
  errors: FieldErrors<FormType>;
};

export type MealButtonType = {
  setValue: UseFormSetValue<FormType>;
};
