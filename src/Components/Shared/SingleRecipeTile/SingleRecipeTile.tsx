import React from "react";
import { Link } from "react-router-dom";
import { translations } from "../../../translations/translations";
import { getDietTypeList } from "../../../utils/helpers";
import CooklistButton from "../Cooklist/CooklistButton";
import HeartIcon from "../Icons/HeartIcon";
import ServingIcon from "../Icons/ServingIcon";
import TimeIcon from "../Icons/TimeIcon";
import Tag from "../Tag/Tag";
import { StyledSingleRecipeTile } from "./SingleRecipeTile.styled";
import { ISingleRecipeTile } from "./SingleRecipeTile.types";

const SingleRecipeTile: React.FC<ISingleRecipeTile> = ({
  recipe,
}: ISingleRecipeTile): JSX.Element => {
  const { min, by } = translations;
  const dietTypesToDisaplay = getDietTypeList(recipe).filter(
    (el) => el.fulfilled
  );
  return (
    <StyledSingleRecipeTile backgroundUrl={recipe.image}>
      <Link to="/">
        <div className="background_image">
          <CooklistButton />
          <div className="creadit_text">
            <span>{by}:</span>
            <a href={recipe.sourceUrl}>{recipe.creditText}</a>
          </div>
        </div>
        <div className="single-recipe_footer">
          <div className="title-and-tags">
            <h1>{recipe.title}</h1>
            <div className="tags">
              {dietTypesToDisaplay.map((el) => (
                <Tag
                  key={el.translation}
                  text={el.translation}
                  theme="secondary"
                />
              ))}
            </div>
          </div>
          <div className="recipe-indicators">
            <span>
              <TimeIcon /> {`${recipe.readyInMinutes} ${min}`}
            </span>
            <span>
              <ServingIcon /> {recipe.servings}
            </span>
            <span>
              <HeartIcon /> {recipe.aggregateLikes}
            </span>
          </div>
        </div>
      </Link>
    </StyledSingleRecipeTile>
  );
};

export default SingleRecipeTile;
