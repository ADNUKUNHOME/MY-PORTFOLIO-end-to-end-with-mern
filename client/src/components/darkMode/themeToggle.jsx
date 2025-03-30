import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // Install: npm install lucide-react

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
      className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-700 p-1 flex items-center transition-all duration-300"
    >
      <div
        className={`w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transform transition-transform ${
          darkMode ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
      <Sun className="absolute left-1 top-1 w-5 h-5 text-yellow-500 dark:hidden" />
      <Moon className="absolute right-1 top-1 w-5 h-5 text-gray-300 hidden dark:block" />
    </button>
  );
};

export default ThemeToggle;
