export const spring = {
  slow: {
    type: `spring`,
    mass: 1,
    damping: 1000,
    stiffness: 10,
  },
  gentle: {
    type: `spring`,
    mass: 1,
    damping: 50,
    stiffness: 100,
    velocity: 2,
  },
};

export const variants = {
  revealOpacity: {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  },
};
