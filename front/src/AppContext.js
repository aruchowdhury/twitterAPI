import React, { useState, createContext } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [tweet, setTweet] = useState([]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <AppContext.Provider
      value={{ toggle, setToggle, handleToggle, tweet, setTweet }}
    >
      {children}
    </AppContext.Provider>
  );
};
