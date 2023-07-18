import React, { createContext, useCallback, useState } from "react";

interface ThemeState {
  currentColor: string;
  changeColor: (color: string) => void;
}

const DEFAULT_COLOR = "#ffffff";

export const ThemeContext = createContext<ThemeState>({
  currentColor: DEFAULT_COLOR,
  changeColor: () => {},
});

type Props = {
  children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [currentColor, setCurrentColor] = useState<string>(DEFAULT_COLOR);

  const changeColor = useCallback((color: string) => {
    setCurrentColor(color);
  }, []);

  const contextValue: ThemeState = {
    currentColor,
    changeColor,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};