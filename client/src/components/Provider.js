import React, { useState, createContext } from "react";

export const AppContext = createContext();

const Provider = ({ children }) => {
  const [jobs, setJobs] = useState(undefined);
  return (
    <AppContext.Provider value={{ jobs, setJobs }}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
