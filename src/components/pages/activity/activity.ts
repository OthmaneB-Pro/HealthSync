import * as yup from 'yup';

export const activity = yup.object().shape({
    sport: yup.string().required("Un sport est requis").notOneOf(['-- Sport Disponible --'], "Veuillez sélectionner un sport"),
    duration: yup.string().required("La durée est requise"),
} ) 