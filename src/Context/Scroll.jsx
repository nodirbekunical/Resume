import React from "react";
import { useState } from "react";
import { createContext } from "react";

const Context = createContext();

function Scroll() {
  const [scroll, setScroll] = useState(false);

  return (
    <Context.Provider value={{ scroll, setScroll }}>Scroll</Context.Provider>
  );
}

export default Scroll;
