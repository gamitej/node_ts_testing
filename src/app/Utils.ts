export class StringUtils {
  public toUpperCase(arg: string) {
    if (!arg) {
      throw new Error("Invalid argument!");
    }
    return toUpperCase(arg);
  }
}

export function toUpperCase(value: string): string {
  return value.toUpperCase();
}

export type stringInfo = {
  length: number;
  lowercase: string;
  uppercase: string;
  characters: string[];
  extraInfo: Object | undefined;
};

export function getStringInfo(value: string): stringInfo {
  return {
    lowercase: value.toLowerCase(),
    uppercase: value.toUpperCase(),
    characters: Array.from(value),
    length: value.length,
    extraInfo: {},
  };
}
