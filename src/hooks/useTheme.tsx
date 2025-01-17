import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeType } from "../enum";

const getTheme = (): ThemeType => {
  const savedTheme = localStorage.getItem("traceTheme") as ThemeType;
  if (savedTheme && Object.values(ThemeType).includes(savedTheme)) {
    return savedTheme;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? ThemeType.DARKMODE : ThemeType.LIGHTMODE;
};

const useTheme = () => {
  const initialTheme = useMemo(getTheme, []);
  const [theme, setTheme] = useState<ThemeType>(initialTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme =
        prevTheme === ThemeType.LIGHTMODE
          ? ThemeType.DARKMODE
          : ThemeType.LIGHTMODE;

      localStorage.setItem("traceTheme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === ThemeType.DARKMODE);

      return newTheme;
    });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === ThemeType.DARKMODE);
  }, []);

  return { theme, toggleTheme };
};

export { useTheme };
