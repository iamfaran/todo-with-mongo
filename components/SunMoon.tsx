"use client";
import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import useTheme from "@/hooks/useThemeContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SunMoon() {
  const { state, dispatch } = useTheme();

  // if Dark mode is true then show the sun icon
  // else show the moon icon

  const themeToggle = async () => {
    dispatch({ type: "TOGGLE_THEME" });
    try {
      const response = await fetch("/api/theme", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ darkMode: !state.darkMode }),
      });

      if (!response.ok) {
        throw new Error("Error updating theme");
      }
      toast.success("Theme saved", { autoClose: 2000 });
    } catch (error) {
      toast.error("Error saving theme", { autoClose: 2000 });
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
