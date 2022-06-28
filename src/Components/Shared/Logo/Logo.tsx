import React from "react";
import styled from "styled-components";
import { translations } from "../../../translations/translations";
import { colors } from "../../../utils/variables";

const StyledLogo = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  color: ${colors.blue};
  font-weight: 300;
  span {
    color: ${colors.white_100};
    font-weight: 500;
  }
`;

const Logo: React.FC = (): JSX.Element => {
  const { search, recipes } = translations;
  return (
    <StyledLogo>
      {search}
      <span>{recipes}</span>
    </StyledLogo>
  );
};

export default Logo;
