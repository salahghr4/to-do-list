import { createContext, useState } from "react";

export const ModalContext = createContext(null);

export const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(null);
  const [taskId, setTaskId] = useState(null);

  return (
    <ModalContext.Provider
      value={{ showModal, setShowModal, taskId, setTaskId }}
    >
      {children}
    </ModalContext.Provider>
  );
};
