"use client";
import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import useTheme from "@/hooks/useThemeContext";

function SunMoon() {
  const { state, dispatch } = useTheme();

  // if Dark mode is true then show the sun icon
  // else show the moon icon

  return (
    <div
      onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      className="absolute left-5 top-5"
    >
      {/* <MdDarkMode className="text-4xl" /> */}
      {state.darkMode ? (
        <MdLightMode className="text-4xl" />
      ) : (
        <MdDarkMode className="text-4xl text-slate-900" />
      )}
    </div>
  );
}

export default SunMoon;
