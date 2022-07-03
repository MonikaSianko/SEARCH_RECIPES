import React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../../../utils/variables";
import CooklistIcon from "../Icons/CooklistIcon";

const StyledCooklistInfo = styled.div`
  max-width: 30px;
  display: flex;
  flex-direction: column;
  color: ${colors.white_100};
  margin: 0;
  position: relative;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
  }
  .recipes-added {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${colors.blue};
    font-size: 10px;
    line-height: 20px;
    text-align: center;
  }
  @media (${breakpoints.desktopMin}) {
    svg {
      width: 35px;
      height: 35px;
    }
    .recipes-added {
      top: 25px;
      left: 20px;
    }
  }
`;

const CooklistInfo: React.FC = (): JSX.Element => {
  return (
    <StyledCooklistInfo className="cooklist-info">
      <CooklistIcon color={colors.white_100} />
      <span className="recipes-added">12</span>
    </StyledCooklistInfo>
  );
};

export default CooklistInfo;
