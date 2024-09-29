import * as yup from "yup";

export const schema = yup.object().shape({
  mealName: yup
    .string()
    .oneOf(
      ["petit dej", "déjeuner", "collation", "diner"],
      'Le nom du repas doit être "petit dej", "déjeuner", "collation" ou "diner".'
    )
    .required("Le nom du repas est requis"),
  search: yup.string().required("Vous devez indiquer un produit"),
  quantity: yup.string().required("Vous devez indiquer la quantité"),
});
