export const NOOP = () => {};
export const EMPTY_ARRAY = [];

export const IS_WINDOW_DEFINED = typeof window !== `undefined`;

export const safeParserJson = parseString => {
  try {
    return JSON.parse(parseString);
  } catch (e) {
    return null;
  }
};
