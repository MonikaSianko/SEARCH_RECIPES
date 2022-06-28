export interface ITag {
    theme: TTagTheme;
    text: string;
}

type TTagTheme = "primary" | "secondary"