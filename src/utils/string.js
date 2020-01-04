export const toBoolean = type =>
  typeof type === 'string' ? (type === 'true' ? true : false) : type;
