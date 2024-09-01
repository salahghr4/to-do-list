import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";

const useTasks = () => {
  return useContext(TasksContext);
};

export default useTasks;
