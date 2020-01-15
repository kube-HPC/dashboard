export const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
export const trans = delta => (x, y) => `translate3d(${x / delta}px,${y / delta}px,0)`;
