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

export type Product = {
  product_name: string;
  id: string;
};

export type SearchComponentProps = {
  setResults: React.Dispatch<React.SetStateAction<Product[]>>;
};

export type SearchResulsType = {
  results: any[];
  handleClick: (item: any) => void;
};

export type MenuType = {
  id: string;
  title: string;
  src: string;
  alt: string;
  quantity: number;
  calory: string;
  mealName: string;
};

export type FormTrackingProps = {
  onAddCard: (newCard: MenuType) => void;
};
export type CardMealProps = {
  menu: MenuType[];
}