import { createContext, useContext, useState } from "react";

const ArrayContext = createContext();

export const useArray = () => useContext(ArrayContext);

export const ArrayProvider = ({ children }) => {
  //const [showForm, setForm] = useState();

  return <ArrayContext.Provider>{children}</ArrayContext.Provider>;
};
