import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-8 h-5 md:w-14 md:h-8 rounded-full bg-gray-300 dark:bg-gray-700  shadow-lg p-1 flex items-center transition-all duration-300"
    >
      <div
        className={`w-3 h-3 md:w-6 md:h-6 bg-white dark:bg-black rounded-full shadow-md transform transition-transform ${
          darkMode ? "translate-x-3 md:translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </button>
  );
};

export default ThemeToggle;
