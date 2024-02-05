import React from "react";
import { useState } from "react";
import { createContext } from "react";

const Context = createContext();

function ModalContex() {
  const [show, setShow] = useState(false);

  return <Context.Provider value={{ show, setShow }}>ModalContex</Context.Provider>;
}

export default ModalContex;
