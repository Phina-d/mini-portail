import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "../styles/ThemeToggle.css";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="theme-toggle-btn"
      onClick={() => setDarkMode(!darkMode)}
      title={darkMode ? "Mode clair" : "Mode sombre"}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
