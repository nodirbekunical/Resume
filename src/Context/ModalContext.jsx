import React from "react";
import { useState } from "react";
import { createContext } from "react";

const Context = createContext();

function ModalContext({ children }) {
  const [show, setShow] = useState(false);

  return <Context.Provider value={{ show, setShow }}>{children}</Context.Provider>;
}

export { Context, ModalContext };
