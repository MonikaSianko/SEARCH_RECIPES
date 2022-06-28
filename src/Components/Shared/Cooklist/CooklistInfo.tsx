import React from "react";
import styled from "styled-components";
import { translations } from "../../../translations/translations";
import { colors } from "../../../utils/variables";
import CooklistIcon from "../Icons/CooklistIcon";

const StyledCooklistInfo = styled.div`
  max-width: 30px;
  display: flex;
  flex-direction: column;
  color: ${colors.white_100};
  cursor: pointer;
  margin: 0;
  position: relative;
  svg {
    width: 24px;
    height: 24px;
  }
  .title {
    writing-mode: vertical-lr;
    text-transform: uppercase;
    text-orientation: upright;
    margin-top: 5px;
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
`;

const CooklistInfo: React.FC = (): JSX.Element => {
  const { cooklist } = translations;
  return (
    <StyledCooklistInfo className="cooklist-info">
      <CooklistIcon color={colors.white_100} />
      <span className="recipes-added">12</span>
      <span className="title">{cooklist}</span>
    </StyledCooklistInfo>
  );
};

export default CooklistInfo;
