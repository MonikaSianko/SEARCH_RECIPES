import React from "react";
import styled from "styled-components";
import { translations } from "../../../translations/translations";
import { colors } from "../../../utils/variables";
import CooklistIcon from "../Icons/CooklistIcon";

const StyledCooklistButton = styled.button`
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
`;

const CooklistButton: React.FC = (): JSX.Element => {
  const { add_to_cooklist } = translations;
  return (
    <StyledCooklistButton className="cooklist_button">
      {add_to_cooklist} <CooklistIcon />
    </StyledCooklistButton>
  );
};

export default CooklistButton;
