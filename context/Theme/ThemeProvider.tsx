"use client";
import { createContext, PropsWithChildren, useReducer } from "react";

import {
  themeReducer,
  ThemeState,
  ThemeAction,
} from "@/context/Theme/themeReducer";

type ThemeContextType = {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
};

const initialState: ThemeState = {
  darkMode: false,
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  console.log("ThemeProvider");

  console.log("Theme State", state);

  const value: ThemeContextType = { state, dispatch };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
