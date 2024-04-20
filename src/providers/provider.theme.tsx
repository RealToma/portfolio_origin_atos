import React from "react";
import { ThemeProvider } from "styled-components";

const ThemesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = () => {
    return {
      breakpoints: ["375px", "768px", "1024px", "1360px", "1600px", "1920px"],
      space: [0, 4, 8, 16, 32, 64],
      fontSizes: [12, 14, 16, 20, 24, 32],
      colors: {
        primary: "#4461fa",
        secondary: "#5fc9f8",
      },
      fonts: [],
      fontWeights: [500, 600, 700, 800],
      lineHeights: [],
      letterSpacings: [],
      sizes: [],
      borders: [],
      borderWidths: [],
      borderStyles: [],
      radii: [],
      shadows: [],
      zIndices: [],
    };
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemesProvider;
