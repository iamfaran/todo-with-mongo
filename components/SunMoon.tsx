"use client";
import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import useTheme from "@/hooks/useThemeContext";

function SunMoon() {
  const { state, dispatch } = useTheme();

  // if Dark mode is true then show the sun icon
  // else show the moon icon

  const themeToggle = async () => {
    try {
      const response = await fetch("/api/theme", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ darkMode: !state.darkMode }),
      });

      if (response.ok) {
        dispatch({ type: "TOGGLE_THEME" });
      } else {
        console.error("Error updating theme on server:", response.statusText);
        // (Optional) Show error feedback to the user
      }
    } catch (error) {
      console.error("Error updating theme:", error);
      // (Optional) Show error feedback to the user
    }
  };
  return (
    <div onClick={themeToggle} className="absolute left-5 top-5">
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
