import classNames from "classnames";
import React from "react";
import { StyledTag } from "./Tag.styled";
import { ITag } from "./Tag.types";

const Tag: React.FC<ITag> = ({
  styleConfig,
  text,
  selected,
  onClick,
}: ITag): JSX.Element => {
  const generateClassName = () => {
    const { type, layout, theme } = styleConfig;
    return `${theme} ${type} ${layout}`;
  };
  console.log(selected);
  const generatedClassName = generateClassName();
  return (
    <StyledTag
      className={classNames("tag", generatedClassName, {
        clickable: onClick,
        selected,
      })}
      onClick={onClick}
    >
      {text}
    </StyledTag>
  );
};

export default Tag;
