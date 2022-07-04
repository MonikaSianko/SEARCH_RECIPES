import { TDevice, TLayout, TTheme } from "../../../utils/global.types";

export interface ITag {
  text: string;
  styleConfig: IStyledTag["styleConfig"];
  onClick?: () => void;
  selected?: boolean;
}

export interface IStyledTag {
  styleConfig: {
    theme: TTheme;
    type: TTagType;
    layout?: TLayout;
  };
}

type TTagType = "diet" | "meal" | "cousine";
