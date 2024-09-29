import * as yup from "yup";

export const schema = yup.object().shape({
  mealName: yup.string().required("Veuillez sélectionner un repas"),
  search: yup.string().required("Vous devez indiquer un produit"),
  quantity: yup.string().required("Vous devez indiquer la quantité"),
});
