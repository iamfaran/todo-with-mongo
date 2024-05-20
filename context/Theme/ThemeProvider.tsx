"use client";
import { createContext, PropsWithChildren, useReducer, useEffect } from "react";
import { useSession } from "next-auth/react";

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
  const { data: session } = useSession();
  console.log("THEME PROVIDER SESSION", session);
  // If session is available
  // get the theme from the user object and set it as the initial state
  if (session) {
    initialState.darkMode = session.user?.darkMode;
  }

  const [state, dispatch] = useReducer(themeReducer, initialState);
  useEffect(() => {
    if (state.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.darkMode]);

  const value: ThemeContextType = { state, dispatch };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
