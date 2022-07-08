export const theme = {
  light: {
    colors: {
      text: "#202020",
      background: "#f2f2f2",
      border: "hsl(0, 0%, 87%)",
    },
    //to avoid repeating a little- diffrent file & just imports. hmmm.
    font: {
      thin: 100,
      light: 300,
      medium: 500,
      bold: 700,
    },

    media: {
      phone: "@media (min-width: 320px)",
      tablet: "@media (min-width: 768px)",
      desktop: "@media (min-width: 1024px)",
    },
  },
  dark: {
    colors: {
      text: "#f2f2f2",
      background: "#202020",
      border: "hsl(0, 0%, 78%)",
    },

    font: {
      thin: 100,
      light: 300,
      medium: 500,
      bold: 700,
    },

    media: {
      phone: "@media (min-width: 320px)",
      tablet: "@media (min-width: 768px)",
      desktop: "@media (min-width: 1024px)",
    },
  },
};
