import React from "react";
import { THEMES } from "../utils/constants/themeConstant";

const initialState = {
  theme: THEMES.DEFAULT.key,
};

const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const [theme] = React.useState(THEMES.DEFAULT.key);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
