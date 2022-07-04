import React from "react";
import styled from "styled-components";
import { DIET } from "../../../utils/constants";
import { generateFilters } from "../../../utils/helpers";
import TypeSelector from "../../Shared/TypeSelector/TypeSelector";
const StyledFilters = styled.div``;
const BoxFilters: React.FC = ({}): JSX.Element => {
  const dietTypes = generateFilters(DIET);
  return (
    <StyledFilters>
      <TypeSelector
        tagsStyleConfig={{
          type: "diet",
          theme: "primary",
          layout: "horizontal",
        }}
        tags={dietTypes}
        typeTitle="Diet type"
      />
    </StyledFilters>
  );
};

export default BoxFilters;
