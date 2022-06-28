import { ISingleRecipe } from "../App.types";
import { translations } from "../translations/translations";

export const getDietTypeList = (recipe:ISingleRecipe) => {
    return [
        {
            fulfilled: recipe.vegetarian,
            translation: translations.vegetarian
        },
        {
            fulfilled: recipe.vegan,
            translation: translations.vegan
        },
        {
            fulfilled: recipe.ketogenic,
            translation: translations.ketogenic
        },
        {
            fulfilled: recipe.dairyFree,
            translation: translations.dairy_free
        },
        {
            fulfilled: recipe.glutenFree,
            translation: translations.gluten_free
        }
    ]
}