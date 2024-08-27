export type KeyValueObj = {
  [key: string]: string;
}

export type MatchItem = {
  regex: RegExp | string;
  styleObj?: KeyValueObj;
  cLabel?: string;
  onFormat?: (val: string) => string;
  cAttributes?: KeyValueObj;
}

export type DefaultStyle = {
  fLabel: string,
  fCLabel: string,
  fStyleObj: KeyValueObj
}

export type CallBackParam = RegExp | string