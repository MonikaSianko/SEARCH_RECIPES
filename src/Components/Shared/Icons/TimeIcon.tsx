import React from "react";
import { IIcon } from "../../../App.types";
import { colors } from "../../../utils/variables";

const TimeIcon: React.FC<IIcon> = ({
  width,
  height,
  color,
}: IIcon): JSX.Element => {
  return (
    <svg
      width={width || "15"}
      height={height || "15"}
      viewBox={width && height ? `0 0  ${width} ${height}` : "0 0 15 15"}
      fill="none"
    >
      <path
        d="M7.63332 1.66667C4.41682 1.66667 1.79999 4.28351 1.79999 7.50001C1.79999 10.7165 4.41682 13.3333 7.63332 13.3333C10.8498 13.3333 13.4667 10.7165 13.4667 7.50001C13.4667 4.28351 10.8498 1.66667 7.63332 1.66667ZM7.63332 12.1667C5.06024 12.1667 2.96665 10.0731 2.96665 7.50001C2.96665 4.92692 5.06024 2.83334 7.63332 2.83334C10.2064 2.83334 12.3 4.92692 12.3 7.50001C12.3 10.0731 10.2064 12.1667 7.63332 12.1667Z"
        fill={color || colors.orange}
      />
      <path
        d="M8.21665 4.58333H7.04999V7.74149L8.9709 9.66241L9.79574 8.83758L8.21665 7.2585V4.58333Z"
        fill={color || colors.orange}
      />
    </svg>
  );
};

export default TimeIcon;
