import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

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
      className="p-2 border rounded-full flex items-center justify-center w-10 h-10 dark:bg-gray-800 dark:text-white transition-all ease-in-out hover:cursor-pointer"
    >
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20}/>}
    </button>
  );
 
}

export default ThemeToggle