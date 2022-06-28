import React from "react";
import CooklistInfo from "../../Shared/Cooklist/CooklistInfo";
import Logo from "../../Shared/Logo/Logo";
import styled from "styled-components";
import hero from "../../../../public/hero.jpg";

const StyledSectionHero = styled.div`
  background-image: url(hero.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  text-align: center;
  .cooklist-info {
    text-align: right;
  }
`;

const SectionHero: React.FC = (): JSX.Element => {
  return (
    <StyledSectionHero>
      <Logo />
      <CooklistInfo />
    </StyledSectionHero>
  );
};

export default SectionHero;
