export const iconsToActions = ({ icons, actions }) =>
  icons.map((name, index) => ({
    name,
    action: actions[index],
  }));
