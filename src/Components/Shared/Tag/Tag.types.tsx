import { TDevice, TLayout, TTheme } from "../../../global/global.types";

export interface ITag {
  text: string;
  styleConfig: IStyledTag["styleConfig"];
}

export interface IStyledTag {
  styleConfig: {
    theme: TTheme;
    type: TTagType;
    layout?: TLayout;
  };
}

type TTagType = "diet" | "meal" | "cousine";
