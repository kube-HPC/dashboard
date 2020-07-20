// @flow

const name = `errors`;

export type ErrorType = {
  STATE: {
    name: string,
  },
};

export const errors: ErrorType = Object.freeze({
  STATE: {
    name,
  },
});
