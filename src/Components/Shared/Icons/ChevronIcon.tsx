import React from "react";
import { IIcon } from "../../../App.types";
import { colors } from "../../../utils/variables";

const ChevronIcon: React.FC<IIcon> = ({
  width,
  height,
  color,
}: IIcon): JSX.Element => {
  return (
    <svg
      width={width || "20"}
      height={height || "20"}
      viewBox={width && height ? `0 0  ${width} ${height}` : "0 0 20 20"}
      fill="none"
    >
      <path
        d="M3.3335 7.5L10.0002 14.1667L16.6668 7.5"
        stroke={color || colors.blue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronIcon;
