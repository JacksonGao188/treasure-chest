export type ColorMap =
  'black' |
  'red' |
  'green' |
  'yellow' |
  'blue' |
  'magenta' |
  'cyan' |
  'white' |
  'brightBlack' |
  'brightRed' |
  'brightGreen' |
  'brightYellow' |
  'brightBlue' |
  'brightMagenta' |
  'brightCyan' |
  'brightWhite'

export type ColorType = {
  [key in ColorMap]: string;
}

export type BgColorType = {
  [key in ColorMap]: string;
}
export interface StyleType {
  bold: string;
  dim: string;
  italics: string;
  underline: string;
  blink: string;
  reverse: string;
  strikethrough: string;
  hidden: string
}

export type EasyChalkTextType = string | number

export type EasyChalkOptionsType = string[]