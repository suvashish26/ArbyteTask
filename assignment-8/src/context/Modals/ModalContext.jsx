import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

export const ModalState = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};
export const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};
