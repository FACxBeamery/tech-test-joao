import React, { useState, createContext } from "react";

export const AppContext = createContext();

/**
 * HOC that ensures its consuming components subscribe to context changes.
 */

const Provider = ({ children }) => {
  const [jobs, setJobs] = useState();

  return (
    <AppContext.Provider
      value={{
        jobs,
        setJobs
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
