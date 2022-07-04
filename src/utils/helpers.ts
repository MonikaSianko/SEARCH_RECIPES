import { ISingleRecipe } from "../App.types";
import { translations } from "../translations/translations";
import { COUSINE, DIET, MEAL } from "./constants";
import { TFilterType } from "./global.types";

export const generateFilters = (filterType: TFilterType) => {
  const dietTypes = ["vegetarian", "vegan", "gluten-free", "dairy-free", "ketogenic", "paleo" ];
  // future: {type: VEGETARIAN, translation: data.vegetarian}
const mealTypes = ["main-course", "side-dish", "dessert", "appetizer", "breakfast", "snack", "drink"];
const cousineTypes = ["european","american", "african", "latin-american", "middle-eastern"];

switch (true) {
 case filterType === DIET:
  return dietTypes;
  case filterType === MEAL:
    return mealTypes;
  case filterType === COUSINE:
    return cousineTypes;
  default:
    return [];
}
};
