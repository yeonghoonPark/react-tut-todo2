import { createContext, useContext, useState } from "react";

type DarkMode = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const DarkModeContext = createContext<DarkMode>({
  darkMode: false,
  toggleDarkMode: () => {},
});

type Props = {
  children: React.ReactNode;
};

export function DarkModeProvider({ children }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    updateDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

const updateDarkMode = (darkMode: boolean) => {
  darkMode
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
};

export const useDarkMode = () => useContext(DarkModeContext);
