import styled from "styled-components";
import { breakpoints, colors, shadows } from "../../../utils/variables";
import { IStyledTag } from "./Tag.types";

export const StyledTag = styled.span`
  border-radius: 10px;
  box-shadow: ${shadows.basic};
  color: ${colors.white_100};
  white-space: nowrap;
  &.primary {
    font-size: 14px;
    font-weight: 300;
    padding: 5px 10px;
    margin-bottom: 10px;
    text-transform: uppercase;
    &.diet {
      &.horizontal {
        background: ${colors.diet_gradient_horizontal};
      }
      &.veritcal {
        background: ${colors.diet_gradient_vertical};
      }
    }
    &.meal {
      &.horizontal {
        background: ${colors.meal_gradient_horizontal};
      }
      &.veritcal {
        background: ${colors.meal_gradient_vertical};
      }
    }
    &.cousine {
      &.horizontal {
        background: ${colors.cousine_gradient_horizontal};
      }
      &.veritcal {
        background: ${colors.cousine_gradient_vertical};
      }
    }
  }
  &.secondary {
    background: ${colors.grey_light};
    padding: 2px 8px;
    font-size: 10px;
  }

  //DESKTOP
  @media only screen and (${breakpoints.desktopMin}) {
    &.primary {
      font-size: 20px;
    }
    &.secondary {
      font-size: 12px;
    }
  }
`;
