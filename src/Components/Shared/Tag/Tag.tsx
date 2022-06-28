import React from "react";
import { StyledTag } from "./Tag.styled";
import { ITag } from "./Tag.types";

const Tag: React.FC<ITag> = ({ theme, text }: ITag): JSX.Element => {
  return <StyledTag className={theme}>{text}</StyledTag>;
};

export default Tag;
