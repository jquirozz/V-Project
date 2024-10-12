import { createContext, useContext, useState, useEffect } from "react";
import { themes } from "./themes";

// Create a context for the theme
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to manage theme state
export const ThemeProvider = ({ children }) => {
  // Initialize theme state from local storage or default to "light"
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Function to change the theme
  const changeTheme = (newTheme) => {
    setTheme(newTheme); // Update the state with the new theme
    localStorage.setItem("theme", newTheme); // Save the new theme to local storage

    // Get the variables for the new theme and apply them to the document
    const themeVariables = themes[newTheme];
    Object.keys(themeVariables).forEach((key) => {
      document.documentElement.style.setProperty(key, themeVariables[key]);
    });
  };

  // Effect to apply the current theme when it changes
  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  // Provide the theme and changeTheme function to the context
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
