import React, { useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { breakpoints, colors } from "../../../utils/variables";
import ChevronIcon from "../Icons/ChevronIcon";
import Tag from "../Tag/Tag";
import { IStyledTag } from "../Tag/Tag.types";

const StyledTypeSelector = styled.div`
  background: ${colors.white_70};
  border-radius: 10px;
  margin: 25px 15px;
  width: 100%;
  .toggle {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    color: ${colors.blue};
    padding: 10px 20px;
    cursor: pointer;
    svg {
      margin-left: 5px;
    }
    &.opened {
      border-bottom: 1px solid ${colors.line_blue};
    }
  }
  .tags {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px 20px;
    padding-right: 5px;
    .tag:not(:last-of-type) {
      margin-right: 5px;
    }
  }
  @media only screen and (${breakpoints.desktopMin}) {
    .toggle {
      font-size: 20px;
    }
  }
`;

interface ITypeSelector {
  typeTitle: string;
  tags: string[];
  tagsStyleConfig: IStyledTag["styleConfig"];
}

interface ITypeSelectorState {
  toggle: boolean;
}
const TypeSelector: React.FC<ITypeSelector> = ({
  typeTitle,
  tags,
  tagsStyleConfig,
}: ITypeSelector) => {
  const [state, setState] = useState<ITypeSelectorState>({ toggle: false });
  const handleToggle = (): void => {
    setState({ ...state, toggle: !state.toggle });
  };
  return (
    <StyledTypeSelector>
      <div
        className={classNames("toggle", { opened: !state.toggle })}
        onClick={handleToggle}
      >
        {typeTitle} <ChevronIcon />
      </div>
      {!state.toggle && (
        <div className="tags">
          {tags.map((el) => (
            <Tag key={el} text={el} styleConfig={tagsStyleConfig} />
          ))}
        </div>
      )}
    </StyledTypeSelector>
  );
};

export default TypeSelector;
