import styled from "styled-components";
import { colors, shadows } from "../../../utils/variables";

export const StyledTag = styled.span`
  border-radius: 10px;
  box-shadow: ${shadows.basic};
  &.secondary {
    background: ${colors.grey_light};
    color: ${colors.white_100};
    padding: 2px 8px;
    font-size: 10px;
    margin-right: 8px;
    font-weight: 300;
  }
`;
