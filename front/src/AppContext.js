import React, { useState, createContext } from "react";

// Using React Context to share states between components
export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  //Created toggle state to switch between components from header
  const [toggle, setToggle] = useState(false);

  //Created flip state to flip header
  const [isFlipped, setIsFlipped] = useState(false);

  // Created tweet to hold the received data from fetch
  const [tweet, setTweet] = useState([]);

  // function to switch screen/components from header
  const handleToggle = () => {
    setToggle(!toggle);
  };
  // function to flip header
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <AppContext.Provider
      value={{
        toggle,
        setToggle,
        handleToggle,
        tweet,
        setTweet,
        isFlipped,
        setIsFlipped,
        handleFlip,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
