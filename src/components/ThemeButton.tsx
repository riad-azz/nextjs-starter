"use client";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded bg-gray-900 px-2 py-1 text-sm text-white hover:opacity-80 dark:bg-white dark:text-gray-900"
    >
      Toggle Theme
    </button>
  );
};

export default ThemeButton;
