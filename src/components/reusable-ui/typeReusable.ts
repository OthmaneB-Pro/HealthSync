import { ChangeEvent } from "react";
import { FieldErrors } from "react-hook-form";
import { FormType } from "../pages/mealTracking/form/typeForm";

export type TitleType = {
  label: string;
};

export type ListResultsType = {
  onClick: () => void;
  label: string;
};

export type InputWithYupType = {
  type: string;
  placeholder: string;
  register?: any;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};
export type ErrorTextProps = {
  errors: FieldErrors<FormType>;
  fieldName: keyof FormType;
};

export type ElementListType = {
  href: string;
  Logo: JSX.Element;
  label: string;
};
export type ButtonType = {
  Logo: JSX.Element;
  label: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export type CardType = {
  src: string;
  alt: string;
  title: string;
  quantity: string;
  calory: string;
  meal: string;
};
