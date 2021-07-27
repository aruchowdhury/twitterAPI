import React, { useState, createContext } from "react";

// Using React Context to share states between components
export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  //Created toggle state to switch between components from header
  const [toggle, setToggle] = useState(false);
  // Created tweet to hold the received data from fetch
  const [tweet, setTweet] = useState([]);
  // function to switch screen/components from header
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
