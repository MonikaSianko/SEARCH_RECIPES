import React from "react";
import styled from "styled-components";
import { translations } from "../../../../translations/translations";
import { breakpoints, colors } from "../../../../utils/variables";

const StyledLogo = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  color: ${colors.blue};
  font-weight: 500;
  span {
    color: ${colors.white_100};
  }
  @media (${breakpoints.desktopMin}) {
    font-size: 32px;
  }
`;

const Logo: React.FC = (): JSX.Element => {
  const { search, recipes } = translations;
  return (
    <StyledLogo className="logo">
      {search}
      <span>{recipes}</span>
    </StyledLogo>
  );
};

export default Logo;
