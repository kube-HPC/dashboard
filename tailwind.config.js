module.exports = {
  theme: {
    extend: {
      colors: {
        primary: `hsl(272, 63%, 50%)`,
        secondary: `#868686`,
        darkGray: {
          '100': `#E9E9E9`,
          '200': `#C7C7C7`,
          '300': `#AAAAAA`,
          '400': `#919191`,
          '500': `#3C3C3C`,
          '600': `#363636`,
          '700': `#313131`,
          '800': `#2C2C2C`,
          '900': `#434343`,
        },
      },
      boxShadow: {
        mdLight: `0 0px 6px -1px rgba(255, 255, 255, .1), 0 0px 4px -1px rgba(255, 255, 255, .06)`,
        xlLight: `0 0px 25px -5px rgba(255, 255, 255, .1), 0 0px 10px -5px rgba(255, 255, 255, .04)`,
      },
      maxHeight: {
        '1/4': `25%`,
        '1/2': `50%`,
        '3/4': `75%`,
      },
    },
  },
};
