export const parseQueryNodes = data =>
  data.map(({ frontmatter, ...rest }) => ({ ...frontmatter, ...rest }));

export const parseQueryNode = data => {
  const [first] = parseQueryNodes(data);
  return first;
};
