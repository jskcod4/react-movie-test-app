import React, { useState, useEffect } from 'react';

import GetGenders from 'services/GetGenders';

export const GenderContext = React.createContext({});

export function GenderContextProvider({ children }) {
  const [genders, setGenders] = useState([]);

  useEffect(() => {
    GetGenders().then((res) => {
      setGenders(res);
    });
  }, []);

  return (
    <GenderContext.Provider
      value={{
        genders,
        setGenders,
      }}
    >
      {children}
    </GenderContext.Provider>
  );
}
