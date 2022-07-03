import { ISingleRecipe } from "../App.types";
import { translations } from "../translations/translations";

export const getDietTypeList = () => {
  return [
    translations.vegetarian,
    translations.vegan,
    translations.ketogenic,
    translations.dairy_free,
    translations.gluten_free,
  ];
};
