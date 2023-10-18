"use client";
import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = `(prefer-color-schema: dark)`;
  if (typeof window !== "undefined") {
    const [mode, setMode] = useState(localStorage.getItem("theme") || "");

    useEffect(() => {
      const mediaQuery = window.matchMedia(preferDarkQuery);
      const usePref = localStorage.getItem("theme");

      const handleChange = () => {
        if (usePref) {
          let check = usePref === "dark" ? "dark" : "light";
          setMode(check);
          if (check === "dark") {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        } else {
          let check = mediaQuery.matches ? "dark" : "light";
          setMode(check);
          if (check === "dark") {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }
      };
      handleChange();

      mediaQuery.addEventListener("change", handleChange);

      return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
      if (mode === "dark") {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      }
      if (mode === "light") {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    }, [mode]);

    return { mode, setMode };
  } else {
    return { error: null };
  }
};

export default useThemeSwitcher;
