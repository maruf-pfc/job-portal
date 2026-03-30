import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const contextValue = {
    // Add any global state or functions here
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};