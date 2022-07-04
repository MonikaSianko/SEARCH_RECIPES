import React from "react";
import styled from "styled-components";
import Header from "../../Shared/Header/Header";
import hero from "./hero.png";
import Quote from "../../Shared/Quote/Quote";
import { translations } from "../../../translations/translations";

const StyledBoxHero = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
  .hero {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 465px;
  }
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
    width: auto;
    height: 100%;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const BoxHero: React.FC = (): JSX.Element => {
  const { quote_text, quote_author } = translations;
  return (
    <StyledBoxHero>
      <Header />
      <div className="hero">
        <img src={hero} className="background-image" />
        <Quote theme="primary" quoteText={quote_text} author={quote_author} />
      </div>
    </StyledBoxHero>
  );
};

export default BoxHero;
