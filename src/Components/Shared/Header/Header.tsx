import React from "react";
import styled from "styled-components";
import { breakpoints, colors, shadows } from "../../../utils/variables";
import CooklistInfo from "../Cooklist/CooklistInfo";
import Logo from "./Logo/Logo";

const StyledHeader = styled.header`
  padding: 0 30px;
  height: 50px;
  box-shadow: ${shadows.basic};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  &.primary {
    background: ${colors.orange_50};
  }
  &.secondary {
    background: ${colors.bg_dark_grey};
  }
  @media only screen and (${breakpoints.desktopMin}) {
    height: 80px;
    padding: 0 75px;
  }
`;

interface IHeader {
  isSecondary?: boolean;
}

const Header: React.FC = ({ isSecondary }: IHeader): JSX.Element => {
  return (
    <StyledHeader className={!!isSecondary ? "secondary" : "primary"}>
      <Logo />
      <CooklistInfo />
    </StyledHeader>
  );
};

export default Header;
