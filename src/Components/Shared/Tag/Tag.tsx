import React from "react";
import { StyledTag } from "./Tag.styled";
import { ITag } from "./Tag.types";

const Tag: React.FC<ITag> = ({ styleConfig, text }: ITag): JSX.Element => {
  const generateClassName = () => {
    const { type, layout, theme } = styleConfig;
    return `${theme} ${type} ${layout}`;
  };
  return <StyledTag className={`tag ${generateClassName()}`}>{text}</StyledTag>;
};

export default Tag;
