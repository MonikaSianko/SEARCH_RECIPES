import React from "react";
import styled from "styled-components";
import { TTheme } from "../../../global/global.types";
import { breakpoints, colors } from "../../../utils/variables";

const StyledQuote = styled.div`
  width: 100%;
  color: ${colors.white_100};
  text-align: left;
  padding: 14px 7;
  &.primary {
    background: ${colors.bg_orange};
  }
  p {
    width: 100%;
    font-family: "Abril Fatface", cursive;
    font-size: 20px;
    margin: 0;
  }
  span {
    font-size: 14px;
    font-weight: 300;
  }

  @media only screen and (${breakpoints.desktopMin}) {
    p {
      font-family: "Abril Fatface", cursive;
      font-size: 46px;
      padding-left: 130px;
    }
    span {
      font-size: 14px;
    }
  }
`;

interface IQuote {
  quoteText: string;
  theme: TTheme;
  author?: string;
}

const Quote: React.FC<IQuote> = ({
  quoteText,
  theme,
  author,
}: IQuote): JSX.Element => {
  return (
    <StyledQuote className={`quote ${theme}`}>
      <p>{quoteText}</p>
      <br />
      {author && author?.length > 0 && <span>{author}</span>}
    </StyledQuote>
  );
};

export default Quote;
