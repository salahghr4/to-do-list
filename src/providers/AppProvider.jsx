import { ModalContextProvider } from "../contexts/ModalContext";
import { TasksProvider } from "../contexts/TasksContext";

const AppProvider = ({ children }) => {
  return (
    <TasksProvider>
      <ModalContextProvider>
        {children}
      </ModalContextProvider>
    </TasksProvider>
  );
};

export default AppProvider;
