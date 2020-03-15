export const stringify = obj => JSON.stringify(obj, null, 4);

export const toUpperCaseFirstLetter = str =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const sorter = (a, b) => (isNaN(a) && isNaN(b) ? (a || '').localeCompare(b || '') : a - b);

const falseString = value => typeof value === 'string' && value.toLowerCase() === 'false';
const booleanType = value => typeof value === 'boolean';

export const toBoolean = value => (booleanType(value) ? value : falseString(value) ? false : true);
