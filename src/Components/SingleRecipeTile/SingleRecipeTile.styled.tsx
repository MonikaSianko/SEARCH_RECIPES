import styled from "styled-components";
import { colors, radius, shadows } from "../../utils/variables";
import { IStyledRecipeTile } from "./SingleRecipeTile.types";

export const StyledSingleRecipeTile = styled.div<IStyledRecipeTile>`
  min-height: 280px;
  width: 320px;
  box-shadow: ${shadows.basic};
  border-radius: 10px;
  margin: 20px;
  background: ${colors.white_70};
  position: relative;
  .background_image {
    background-image: ${({ backgroundUrl }): string =>
      backgroundUrl ? `url(${backgroundUrl})` : ""};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 320px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: ${radius.top_10};
    .cooklist_button {
      max-width: 150px;
      padding: 4px 8px;
      background: ${colors.white_85};
      border: none;
      outline: none;
      border-radius: 5px;
      text-transform: uppercase;
      font-size: 12px;
      color: ${colors.blue};
      display: flex;
      align-items: center;
      margin-top: 10px;
      margin-left: 12px;
      cursor: pointer;
      &:hover {
        background: ${colors.blue_hover};
      }
      svg {
        margin-left: 5px;
      }
    }
    .creadit_text {
      padding: 10px 12px 20px 12px;
      background: ${colors.white_70};
      font-size: 12px;
      span {
        color: ${colors.blue};
        margin-right: 5px;
      }
      a {
        color: ${colors.grey_extra_dark};
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .single-recipe_footer {
    position: absolute;
    bottom: 0;
    width: 320px;
    min-height: 95px;
    border-radius: ${radius.recipe_footer};
    background: ${colors.white_100};
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    color: ${colors.grey_dark};
    .title-and-tags {
      h1 {
        font-size: 16px;
        text-transform: uppercase;
      }
    }
    .recipe-indicators {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 12px;
      span {
        display: flex;
        align-items: center;
        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;
