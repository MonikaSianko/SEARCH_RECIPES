import React from "react";
import { Link } from "react-router-dom";
import { translations } from "../../translations/translations";
import CooklistIcon from "../Shared/Icons/CooklistIcon";
import HeartIcon from "../Shared/Icons/HeartIcon";
import ServingIcon from "../Shared/Icons/ServingIcon";
import TimeIcon from "../Shared/Icons/TimeIcon copy";
import { StyledSingleRecipeTile } from "./SingleRecipeTile.styled";
import { ISingleRecipeTile } from "./SingleRecipeTile.types";

const SingleRecipeTile: React.FC<ISingleRecipeTile> = ({
  recipe,
}: ISingleRecipeTile): JSX.Element => {
  const { add_to_cooklist, min, by } = translations;
  return (
    <StyledSingleRecipeTile backgroundUrl={recipe.image}>
      <Link to="/">
        <div className="background_image">
          <button className="cooklist_button">
            {add_to_cooklist} <CooklistIcon />
          </button>
          <div className="creadit_text">
            <span>{by}:</span>
            <a href={recipe.sourceUrl}>{recipe.creditText}</a>
          </div>
        </div>
        <div className="single-recipe_footer">
          <div className="title-and-tags">
            <h1>{recipe.title}</h1>
            <div>tags</div>
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
