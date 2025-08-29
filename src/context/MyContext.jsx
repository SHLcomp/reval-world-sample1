import { createContext, useContext, useState } from "react";

// Create the context
const MyContext = createContext();

// Provider component
export const MyProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <MyContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook for easy access
export const useMyContext = () => useContext(MyContext);
