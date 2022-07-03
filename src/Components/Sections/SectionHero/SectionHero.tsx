import React from "react";
import styled from "styled-components";
import { getDietTypeList } from "../../../utils/helpers";
import Header from "../../Shared/Header/Header";
import hero from "./hero.jpg";
import Tag from "../../Shared/Tag/Tag";
import Quote from "../../Shared/Quote/Quote";
import { translations } from "../../../translations/translations";
import TypeSelector from "../../Shared/TypeSelector/TypeSelector";

const StyledSectionHero = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
  .hero {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 500px;
  }
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
    width: auto;
    height: 700px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const SectionHero: React.FC = (): JSX.Element => {
  const dietTypes = getDietTypeList();
  const { quote_text, quote_author } = translations;
  return (
    <StyledSectionHero>
      <Header />
      <div className="hero">
        <img src={hero} className="background-image" />
        <Quote theme="primary" quoteText={quote_text} author={quote_author} />
      </div>
      <div className="tags">
        {/* {dietTypes.map((el) => (
          <Tag
            styleConfig={{
              type: "diet",
              theme: "primary",
              layout: "horizontal",
            }}
            text={el.translation}
            key={el.translation}
          />
        ))} */}
        <TypeSelector
          tagsStyleConfig={{
            type: "diet",
            theme: "primary",
            layout: "horizontal",
          }}
          tags={dietTypes}
          typeTitle="Diet type"
        />
      </div>
    </StyledSectionHero>
  );
};

export default SectionHero;
