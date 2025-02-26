"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface ThemeContextType {
  backdrop: boolean | false;
  setBackdrop: React.Dispatch<React.SetStateAction<boolean>>;
  //   theme: string | "";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [backdrop, setBackdrop] = useState(false);
  //   const [theme, setTheme] = useState("");
  return (
    <ThemeContext.Provider value={{ backdrop, setBackdrop }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
