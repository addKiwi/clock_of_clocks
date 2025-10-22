type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})` | `rgba(${number},${number},${number},${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export interface ColorTheme {
  hand: Color;
  watchBorder: Color;
  background: Color;
  clockBackground: Color;
}

export enum TYPES {
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal",
} 