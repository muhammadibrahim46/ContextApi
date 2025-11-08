import { createContext, useState } from "react";

export const ToggleContext = createContext();

export function ToggleProvider({ children }) {
  const [isToggled, setIsToggled] = useState(false);

  const toggleTheme = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <ToggleContext.Provider value={{ isToggled, toggleTheme }}>
      {children}
    </ToggleContext.Provider>
  );
}